const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem("admin_token");
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem("admin_token", token);
    } else {
      localStorage.removeItem("admin_token");
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  // Auth
  async login(email: string, password: string) {
    const data = await this.request<{ token: string; admin: { id: string; name: string; email: string } }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    this.setToken(data.token);
    return data;
  }

  async getMe() {
    return this.request<{ admin: { id: string; name: string; email: string } }>("/auth/me");
  }

  logout() {
    this.setToken(null);
  }

  // Services
  async getServices() {
    return this.request<{ data: any[] }>("/services");
  }

  async getServicesAdmin() {
    return this.request<{ data: any[] }>("/services/admin");
  }

  async createService(data: FormData) {
    return this.request<{ data: any }>("/services", { method: "POST", body: data });
  }

  async updateService(id: string, data: FormData) {
    return this.request<{ data: any }>(`/services/${id}`, { method: "PUT", body: data });
  }

  async deleteService(id: string) {
    return this.request<{ message: string }>(`/services/${id}`, { method: "DELETE" });
  }

  // Projects
  async getProjects() {
    return this.request<{ data: any[] }>("/projects");
  }

  async getProjectsAdmin() {
    return this.request<{ data: any[] }>("/projects/admin");
  }

  async createProject(data: FormData) {
    return this.request<{ data: any }>("/projects", { method: "POST", body: data });
  }

  async updateProject(id: string, data: FormData) {
    return this.request<{ data: any }>(`/projects/${id}`, { method: "PUT", body: data });
  }

  async deleteProject(id: string) {
    return this.request<{ message: string }>(`/projects/${id}`, { method: "DELETE" });
  }

  // Contacts
  async getContacts() {
    return this.request<{ data: any[] }>("/contacts");
  }

  async markContactRead(id: string) {
    return this.request<{ data: any }>(`/contacts/${id}/read`, { method: "PUT" });
  }

  async deleteContact(id: string) {
    return this.request<{ message: string }>(`/contacts/${id}`, { method: "DELETE" });
  }

  // Stats
  async getStats() {
    return this.request<{ data: any }>("/stats");
  }

  async updateStats(data: Record<string, number>) {
    return this.request<{ data: any }>("/stats", { method: "PUT", body: JSON.stringify(data) });
  }

  // Reviews
  async getReviews() {
    return this.request<{ data: any[] }>("/reviews");
  }

  async deleteReview(id: string) {
    return this.request<{ message: string }>(`/reviews/${id}`, { method: "DELETE" });
  }
}

export const api = new ApiClient();
