interface APIResponse<T> {
    success: boolean;
    data: T;
    error?: string;
}

declare class MySDK {
    private baseURL;
    private apiKey?;
    constructor(baseURL: string, apiKey?: string);
    getData<T>(endpoint: string): Promise<APIResponse<T>>;
}

export { MySDK };
