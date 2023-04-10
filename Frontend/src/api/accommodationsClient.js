import BaseClass from "../util/baseClass";
import axios from 'axios'

/**
 * This could be a great place to explore Mixins. Currently the client is being loaded multiple times on each page,
 * which we could avoid using inheritance or Mixins.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins
 * https://javascript.info/mixins
 */
export default class AccommodationsClient extends BaseClass {

    constructor(props = {}){
        super();
        const methodsToBind = ['clientLoaded', 'getAccommodations', 'createAccommodation'];
        this.bindClassMethods(methodsToBind, this);
        this.props = props;
        this.clientLoaded(axios);
    }

    /**
     * Run any functions that are supposed to be called once the client has loaded successfully.
     * @param client The client that has been successfully loaded.
     */
    clientLoaded(client) {
        this.client = client;
        if (this.props.hasOwnProperty("onReady")){
            this.props.onReady();
        }
    }

    /**
     * Gets the concert for the given ID.
     * @param id Unique identifier for a concert
     * @param errorCallback (Optional) A function to execute if the call fails.
     * @returns The concert
     */
    async getAccommodations(id, errorCallback) {
        try {
            const response = await this.client.get(`/accommodations/${id}`);
            return response.data;
        } catch (error) {
            this.handleError("getAccommodations", error, errorCallback)
        }
    }

    async getAllAccommodations(errorCallback) {
            try {
                console.log("here we are")
                const response = await this.client.get(`/accommodations/all`);
                console.log("here we are")
                return response.data;
            } catch (error) {
                this.handleError("getAccommodations", error, errorCallback)
            }
        }

    async createAccommodation(accessibilityNeed, accommodation, accommodation2, errorCallback ) {
        console.log("did we get here?");
        try {
            const response = await this.client.post(`accommodations`, {
                accessibilityNeed: accessibilityNeed,
                accommodations: [ accommodation , accommodation2 ]
            });

            return response.data;
        } catch (error) {
            this.handleError("createAccommodation", error, errorCallback);
        }
    }

    /**
     * Helper method to log the error and run any error functions.
     * @param error The error received from the server.
     * @param errorCallback (Optional) A function to execute if the call fails.
     */
    handleError(method, error, errorCallback) {
        console.error(method + " failed - " + error);
        if (error.response.data.message !== undefined) {
            console.error(error.response.data.message);
        }
        if (errorCallback) {
            errorCallback(method + " failed - " + error);
        }
    }
}
