import BaseClass from "../util/baseClass";
import DataStore from "../util/DataStore";
import RequestClient from "../api/requestClient";

class RequestPage extends BaseClass {

    constructor() {
        super();
        // added new function to retrieve and display accessibility needs
        this.bindClassMethods(['myFunction', 'onClick', 'onShowRequest', 'onSubmitRequest', 'onCreate'], this);
        this.dataStore = new DataStore();
    }

    /**
     * Once the page has loaded, set up the event handlers and fetch the accommodation list.
     */
    async mount() {
        document.getElementById('request-results').addEventListener('submit', this.onShowRequest);
        document.getElementById('request-accommodation').addEventListener('submit', this.onSubmitRequest);
        document.getElementById('accessibilityNeeds').addEventListener('click', this.onClick);
        document.getElementById('buttonTest').addEventListener('click', this.myFunction);

        this.client = new RequestClient();


    }

    async myFunction() {
      console.log("pushed");
      var x = document.getElementById("testing");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    // Render Methods --------------------------------------------------------------------------------------------------
    async onClick(event) {
        event.preventDefault()
        console.log(event);
        let result = await this.client.getAccommodations(event.path[0].id, this.errorHandler);
        console.log(result);
        console.log(result.accommodations.length);
        let resultArea = document.getElementById("accommodations");
                for (let i = 0; i < result.accommodations.length; i++) {
                    resultArea.innerHTML = `<div><h1>Accommodations for ${result.accessibilityNeed}</h1>
                    ${result.accommodations.map((accommodation) => ` <p>${accommodation}</p>`).join('')}
                    </div>`
                }
    }

    async onShowRequest(event) {
            event.preventDefault();

            let result = await this.client.getAllRequest(this.errorHandler);
            console.log(result);
            let resultArea = document.getElementById("result4");
                for (let i = 0; i < result.length; i++) {
                    resultArea.innerHTML = `<div>
                    ${result.map((request) => ` <p>Name: ${request.name}</p><p>Request Date: ${request.timeStamp}</p><p>Requested Accommodations: ${request.accommodation}</p>`).join('')}
                    </div>`
                }
        }

    // Event Handlers --------------------------------------------------------------------------------------------------

    async onSubmitRequest(event) {
        // Prevent the page from refreshing on form submit
        event.preventDefault();

        let result1 = document.getElementById("request-accommodation");
        let result2 = document.getElementById("create-accessibility-need-field").value;
        let result3 = document.getElementById("acc-select").value;
        let result4 = document.getElementById("acc-select2").value;

        const createdAccommodation1 = await this.client.createRequest(result2, result3, result4, this.errorHandler);
        console.log("created:");
        console.log(createdAccommodation1);
        if (createdAccommodation1) {
                    this.showMessage(`Your request has been sent`)
                } else {
                    this.errorHandler("Error sending, please Try again...");
                }

    }

    async onCreate() {

        let response = await this.client.getAllAccommodations(this.errorHandler);
        if (response.length == 0) {
            const createdAccommodation1 = await this.client.createAccommodation("Sensory Sensitivity", "Quiet and/or private workspace", "Wear noise cancellation headphones", this.errorHandler);
            const createdAccommodation2 = await this.client.createAccommodation("Physical Organization", "30 minutes blocked off on the calendar at the end of each workday to organize and reset space", "60 minutes blocked off on the calendar at the end of each workday to organize and reset space", this.errorHandler);
            const createdAccommodation3 = await this.client.createAccommodation("Social Communication", "Prefer to text or chat", "Visual Learning Aids", this.errorHandler);
            const createdAccommodation4 = await this.client.createAccommodation("Time Management", "Setting a timer for 10 minutes and doing the task intentionally for those 10 minutes without breaks or distractions", "Take a couple minutes at the beginning of each day to plan your priorities.", this.errorHandler);
            const createdAccommodation5 = await this.client.createAccommodation("Task Organization", "Supervisor organizes all assigned tasks by priority", "Review or priorities daily", this.errorHandler);
            const createdAccommodation6 = await this.client.createAccommodation("Auditory Processing", "All instructions and feedback in written form", "closed captioning for all digital meetings", this.errorHandler);
            //const createdAccommodation7 = await this.client.createAccommodation("Stress Management", "Accommodation for S.M.", "set of things", this.errorHandler);
        }
        let response2 = await this.client.getAllAccommodations(this.errorHandler);
        let resultArea = document.getElementById("accessibilityNeeds");
        for (let i = 0; i < response2.length; i++) {
            resultArea.innerHTML = `<div id="button-group">
            ${response2.map((accommodation) => `<button id = "${accommodation.id}">${accommodation.accessibilityNeed}</button>`).join('')}
            </div>`
        }

        const setOfAccommodations = new Set([]);
        response2.map((accommodation) => accommodation.accommodations.map((acc) => setOfAccommodations.add(acc)));
        const arrayOfAccommodations = Array.from(setOfAccommodations);
        console.log(arrayOfAccommodations);
        let resultArea2 = document.getElementById("acc-select");

        resultArea2.innerHTML = `<option value="">--Please choose an option--</option>
        ${arrayOfAccommodations.map((accommodation) => ` <option value = "${accommodation}">${accommodation}</option>`).join('')}
        </div>`

        let resultArea3 = document.getElementById("acc-select2");

        resultArea3.innerHTML = `<option value="">--Please choose an option--</option>
        ${arrayOfAccommodations.map((accommodation) => ` <option value = "${accommodation}">${accommodation}<option>`).join('')}
        </div>`





    }
}

/**
 * Main method to run when the page contents have loaded.
 */
const main = async () => {
    const requestPage = new RequestPage();
    await requestPage.mount();
    await requestPage.onCreate();
};

window.addEventListener('DOMContentLoaded', main);