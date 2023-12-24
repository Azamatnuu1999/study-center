import { Injectable } from "@angular/core";
import { BaseService } from "../../shared/services/base.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export abstract class CRUDService <
    TResponse, 
    TRequest
> {
    /**
     * 
     */
    protected abstract url: string;

    /**
     * 
     * @param http 
     */
    constructor(
        private _base: BaseService
    ) {

    }

    /**
     * 
     */
    getAll() : Observable<TResponse[]> {
        return this._base.get<TResponse[]>(this.url);
    }

    /**
     *
     */
    getById(id: number) : Observable<TResponse> {
        return this._base.get<TResponse>(`${this.url}/${id}`);
    }

    /**
     * 
     */
    postData(model: TRequest) {
        return this._base.post(this.url, model);
    }

    /**
     * 
     */
    putData(id: number, model: TRequest) {
        return this._base.put(`${this.url}/${id}`, model);
    }

    /**
     * 
     */
    deleteData(id: number) : Observable<boolean> {
        return this._base.delete<boolean>(`${this.url}/${id}`);
    }

}