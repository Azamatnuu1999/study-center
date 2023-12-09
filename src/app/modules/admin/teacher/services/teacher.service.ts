import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeachersResponse } from "../models/teacher.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TeacherService {
    /**
     * 
     */
    url: string = 'http://localhost:3000/teachers';

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
    getAll() : Observable<TeachersResponse[]> {
        return this.http.get<TeachersResponse[]>(this.url);
    }
}