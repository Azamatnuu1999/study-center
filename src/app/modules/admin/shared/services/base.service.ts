import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    /**
     * 
     */
    url: string = isDevMode() ? 'http://localhost:3000' : 'http://localhost:3000';
    getUrl(subUrl: string) {
        return `${this.url}/${subUrl}`
    }

    /**
     * 
     */
    private readonly _headers = new HttpHeaders().set(
        'Authorization',
        'Basic' + window.localStorage.getItem('userData')
    )

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
        return this.http.get<T>(this.getUrl(url), { params, headers: this._headers }).pipe(shareReplay(1));
    }

    /**
     * 
     * @param url 
     * @param model 
     */
    post<T>(url: string, model?: any) {
        return this.http.post<T>(this.getUrl(url), model, { headers: this._headers });
    }

    /**
     * 
     * @param url 
     * @param model 
     */
    put<T>(url: string, model?: any) {
        return this.http.put<T>(this.getUrl(url), model, { headers: this._headers });
    }

    /**
     * 
     * @param url 
     */
    delete<T>(url: string, body?: any) {
        return this.http.delete<T>(this.getUrl(url), { body, headers: this._headers });
    }
}