import { APIResponse } from "./types";

export class MySDK {
    private baseURL: string;
    private apiKey?: string;

    constructor(baseURL: string, apiKey?: string) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }

    async getData<T>(endpoint: string): Promise<APIResponse<T>>{
        const response = await fetch(`${this.baseURL}/${endpoint}`, {
            headers: {
                'Authorization': this.apiKey ? `Bearer ${this.apiKey}` : '',
                'Content-Type': 'application/json'
            },
        });
        return response.json();
    }
}