export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

type ApiClientOptions = RequestInit & {
  authToken?: string;
  retries?: number;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

function buildUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

async function parseResponse(response: Response) {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function apiClient<T>(path: string, options: ApiClientOptions = {}): Promise<T> {
  const { authToken, retries = 1, headers, ...init } = options;
  const method = init.method ?? "GET";
  const requestHeaders = new Headers(headers);

  if (!requestHeaders.has("Content-Type") && init.body) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (authToken) {
    requestHeaders.set("Authorization", `Bearer ${authToken}`);
  }

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(buildUrl(path), {
        ...init,
        method,
        headers: requestHeaders,
        credentials: init.credentials ?? "include"
      });

      const payload = await parseResponse(response);

      if (!response.ok) {
        const message = typeof payload === "object" && payload && "error" in payload ? String(payload.error) : response.statusText;
        throw new ApiError(message, response.status, payload);
      }

      return payload as T;
    } catch (error) {
      lastError = error;

      if (method !== "GET" || attempt >= retries) {
        break;
      }
    }
  }

  throw lastError;
}
