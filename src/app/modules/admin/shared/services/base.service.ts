import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    /**
     * 
     */
    url: string = 'http://localhost:3000';
    getUrl(subUrl: string) {
        return `${this.url}/${subUrl}`
    }

    /**
     * 
     * @param http 
     */
    constructor(
        private http: HttpClient
    ) {
    }

    /**
     * 
     * @param url 
     * @param params 
     */
    get<T>(url: string, params?: HttpParams) {
        return this.http.get<T>(this.getUrl(url), { params });
    }

    /**
     * 
     * @param url 
     * @param model 
     */
    post<T>(url: string, model?: any) {
        return this.http.post<T>(this.getUrl(url), model);
    }

    /**
     * 
     * @param url 
     * @param model 
     */
    put<T>(url: string, model?: any) {
        return this.http.put<T>(this.getUrl(url), model);
    }

    /**
     * 
     * @param url 
     */
    delete<T>(url: string, body?: any) {
        return this.http.delete<T>(this.getUrl(url), { body });
    }
}