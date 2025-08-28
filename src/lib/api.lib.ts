import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";
import type { ApiError } from "../models";

const api: AxiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 10000, //10s
})

// Error and Retry Helpers
function normalizeAxiosError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status ?? 0

        //Sometimes we get {error: "message"}
        const serverMessage =
            (error.response?.data as any)?.error
            || (error.response?.data as any)?.message;
        
        return {
            status,
            message: serverMessage || error.message || "Unexpected error",
            code: error.code,
            details: error.response?.data,
        };
    }
    const msg = error instanceof Error ? error.message : "Unknown error"
    return {
        status: 0,
        message: msg
    }
}

function shouldRetry(error: AxiosError & {config?: any}) {
    const status = error.response?.status ?? 0
    const cfg = error.config as any
    const retries = cfg?._retries ?? 0
    /**
     * HTTP codes
     * 429 Too Many Requests
     * 502 Bad Gateway
     * 503 Service Unavailable
     * 504 Gateway Timeout
     */
    return retries < 1 && [429, 502, 503, 504].includes(status);
}

// Request interceptor
api.interceptors.request.use(
    (config) => {
        config.headers = config.headers ?? {}
        config.headers["Accept"] = "application/json"
        config.headers["X-Request-Id"] =
            (globalThis as any).crypto?.randomUUID?.() ?? String(Date.now())
        
        // if we have a token
        const token = localStorage.getItem("token")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        // Log example (avoid to log sensible information on Prod / Live0)
        console.debug("[API:request]", config.method, config.url, config.params || config.data)
        return config;
    },
    (error) => {
        return Promise.reject(normalizeAxiosError(error))
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        // Here you can transform response.data if you want
        console.debug("[API:response]", response.status, response.config.url)
        return response;
    },
    async (error: AxiosError) => {
        // Simple retry (optional)
        if (shouldRetry(error)) {
            const cfg = error.config as any
            cfg._retries = (cfg._retries ?? 0) + 1
            // Optional delay
            await new Promise((r) => setTimeout(r, 100))
            return api(cfg);
        }

        const apiError = normalizeAxiosError(error)
        return Promise.reject(apiError);
    }
);

export default api;