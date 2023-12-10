import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRequest, StudentsResponse } from "../models/student.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StudentService {
    /**
     * 
     */
    url: string = 'http://localhost:3000/students';

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
     */
    getAll() : Observable<StudentsResponse[]> {
        return this.http.get<StudentsResponse[]>(this.url);
    }

    /**
     *
     */
    getById(id: number) : Observable<StudentsResponse> {
        return this.http.get<StudentsResponse>(`${this.url}/${id}`)
    }

    /**
     * 
     */
    postData(model: StudentsRequest) {
        return this.http.post(this.url, model);
    }

    /**
     * 
     */
    putData(id: number, model: StudentsRequest) {
        return this.http.put(`${this.url}/${id}`, model);
    }

    /**
     * 
     */
    deleteData(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}