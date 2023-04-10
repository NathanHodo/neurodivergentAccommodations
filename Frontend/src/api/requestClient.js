import BaseClass from "../util/baseClass";
import axios from 'axios'

export default class RequestClient extends BaseClass {

    constructor(props = {}){
        super();
        const methodsToBind = ['clientLoaded', 'getAccommodations', 'createAccommodation', 'createRequest'];
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
                const response = await this.client.get(`/accommodations/all`);
                return response.data;
            } catch (error) {
                this.handleError("getAccommodations", error, errorCallback)
            }
        }

    async createAccommodation(accessibilityNeed, accommodation, accommodation2, errorCallback ) {
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



    async createRequest(name, accommodation, accommodation2, errorCallback ) {
            try {
                const response = await this.client.post(`request`, {
                    name: name,
                    accommodation: [ accommodation , accommodation2 ]
                });
                return response.data;
            } catch (error) {
                this.handleError("createRequest", error, errorCallback);
            }
        }

    async getAllRequest(errorCallback){
        try {
                    const response = await this.client.get(`/request/all`);
                    return response.data;
                    } catch (error) {
                        this.handleError("getRequest", error, errorCallback)
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
