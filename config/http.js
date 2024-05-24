import axios from "axios";

class Http {
    instance;
    constructor() {
        this.instance = axios.create({
            baseURL: "https://backend-for-mobile-appchat.onrender.com/api/v1",
            timeout: 10000, // 10 seconds
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.instance.interceptors.response.use((response) => {
            return response.data;
        });
    }
}

const httpRequest = new Http().instance;

export default httpRequest;
