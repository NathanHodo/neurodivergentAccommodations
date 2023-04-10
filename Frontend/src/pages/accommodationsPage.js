import BaseClass from "../util/baseClass";
import DataStore from "../util/DataStore";
import AccommodationsClient from "../api/accommodationsClient";

/**
 * Logic needed for the view playlist page of the website.
 */
class AccommodationPage extends BaseClass {

    constructor() {
        super();
        // added new function to retrieve and display accessibility needs
        this.bindClassMethods(['onGet', 'onGetAll', 'onCreate', 'onRenderAccommodations', 'onRenderAllAccommodations', 'onRenderAccessibilityNeeds', 'onDropDown'], this);
        this.dataStore = new DataStore();
    }

    /**
     * Once the page has loaded, set up the event handlers and fetch the accommodation list.
     */
    async mount() {
        document.getElementById('get-by-id-form').addEventListener('submit', this.onGet);
        document.getElementById('create-form').addEventListener('submit', this.onCreate);
        document.getElementById('get-all-form').addEventListener('submit', this.onGetAll);
        document.getElementById('clickListen').addEventListener('click', this.onDropDown);
        this.client = new AccommodationsClient();

        this.dataStore.addChangeListener(this.onRenderAccommodations)
    }

    // Render Methods --------------------------------------------------------------------------------------------------
    async onDropDown(event) {
        event.preventDefault()
        let selectElement = document.querySelector('#dropdown_value');
        let output = selectElement.value;
        console.log("output is: ");
        console.log(output);
        let result = await this.client.getAccommodations(output, this.errorHandler);
        let resultArea = document.getElementById("result-info4");

        //currently the content won't update when the user selects another option... trying this:
        resultArea.innerHTML = "";

        if (result.accommodations) {
            resultArea.innerHTML = `
                    <div>
        ${result.accommodations.map((accommodation) => ` <div>
                                <p>${accommodation}</p>
                            </div>
                        `).join('')}
        </div>
                `
        } else {
            resultArea.innerHTML = "No Item";
        }


    }

    async onRenderAllAccommodations() {
        let resultArea = document.getElementById("result-info2");

        const accommodations = this.dataStore.get("accommodationsAll");
        console.log("look here for dataStore thing");

        if (accommodations) {
            resultArea.innerHTML = `
                    <div>
        ${accommodations.map((accommodation) => ` <div>
                                <p>${accommodation.accommodations}</p>
                            </div>
                        `).join('')}
        </div>
                `
        } else {
            resultArea.innerHTML = "No Item";
        }
    }

    // changed naming convention to onRenderAccommodations
    async onRenderAccommodations() {
//        let resultArea = document.getElementById("result-info");
//
//        const accommodations = this.dataStore.get("accommodations");
//
//        if (accommodations) {
//            resultArea.innerHTML = `
//                <div>Id: ${accommodations.id}</div>
//                <div>Accessibility Need: ${accommodations.accessibilityNeed}</div>
//                <div>Accommodation: ${accommodations.accommodations}</div>
//            `
//        } else {
//            resultArea.innerHTML = "No Item";
//        }
    }

    // added new render to display accessibility needs
    async onRenderAccessibilityNeeds() {
        let response2 = await this.client.getAllAccommodations(this.errorHandler);
        let resultArea = document.getElementById("result-info3");

        for (const element of response2) {
            console.log(element.accessibilityNeed);
            resultArea.innerHTML = `<div>
        ${response2.map((accommodation) => ` <div><p>${accommodation.accessibilityNeed}</p></div>`).join('')}
        </div>`
        }
    }

    // Event Handlers --------------------------------------------------------------------------------------------------

    async onGet(event) {
        // Prevent the page from refreshing on form submit
        event.preventDefault();

        let id = document.getElementById("id-field").value;
        this.dataStore.set("accommodations", null);

        let result = await this.client.getAccommodations(id, this.errorHandler);
        this.dataStore.set("accommodations", result);
        if (result) {
            this.showMessage(`Got ${result.name}!`)
        } else {
            this.errorHandler("Error doing GET!  Try again...");
        }
    }

    async onGetAll(event) {
        // Prevent the page from refreshing on form submit
        event.preventDefault();

        this.dataStore.set("accommodationsAll", null);
        let result = await this.client.getAllAccommodations(this.errorHandler);
        console.log(result.accommodations);
        this.dataStore.set("accommodationsAll", result);
        if (result) {
            this.showMessage(`Got ${result.name}!`)
        } else {
            this.errorHandler("Error doing GET!  Try again...");
        }
        await this.onRenderAllAccommodations();
    }

    async onCreate() {
        this.dataStore.set("everything", null)
        let response = await this.client.getAllAccommodations(this.errorHandler);
        if (response.length == 0) {
            const createdAccommodation = await this.client.createAccommodation("Sensory Sensitivity", "Accommodation for Sensory Sensitivity", "a test of another one", this.errorHandler);
            const createdAccommodation2 = await this.client.createAccommodation("Physical Organization", "Accommodation for Physical Organization", "set of things", this.errorHandler);
            const createdAccommodation3 = await this.client.createAccommodation("Social Communication", "Accommodation for S.C.", "set of things", this.errorHandler);
            const createdAccommodation4 = await this.client.createAccommodation("Time Management", "Accommodation for T.M.", "set of things", this.errorHandler);
            const createdAccommodation5 = await this.client.createAccommodation("Task Organization", "Accommodation for Task Organization", "set of things", this.errorHandler);
            const createdAccommodation6 = await this.client.createAccommodation("Auditory Processing", "Accommodation for A.P.", "set of things", this.errorHandler);
            const createdAccommodation7 = await this.client.createAccommodation("Stress Management", "Accommodation for S.M.", "set of things", this.errorHandler);
        }
        let response2 = await this.client.getAllAccommodations(this.errorHandler);
        let resultArea = document.getElementById("result-info3");
        for (let i = 0; i < response2.length; i++) {
            console.log(response2[i].accessibilityNeed);
            resultArea.innerHTML = `<select id="dropdown_value">
            ${response2.map((accommodation) => ` <option value="${accommodation.id}"><p>${accommodation.accessibilityNeed}</p></opt>`).join('')}
            </select>`
        }
        console.log("response2", response2);
        this.dataStore.set("everything", response2);

//            let response2 = await this.client.getAllAccommodations(this.errorHandler);
//            console.log("liz this is all accommodations from backend");
//            console.log("response2", response2);
//            this.dataStore.set("everything", response2);
    }


}

/**
 * Main method to run when the page contents have loaded.
 */
const main = async () => {
    const accommodationsPage = new AccommodationPage();
    await accommodationsPage.mount();
    await accommodationsPage.onCreate();
};

window.addEventListener('DOMContentLoaded', main);