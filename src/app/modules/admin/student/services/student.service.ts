import { Injectable } from "@angular/core";
import { BaseService } from "../../shared/services/base.service";
import { CRUDService } from "../../shared/services/crud.service";
import { StudentsResponse, StudentsRequest } from "../models/student.model";

@Injectable({
    providedIn: 'root'
})

export class StudentService extends CRUDService<
  StudentsResponse, 
  StudentsRequest
> {
    /**
     * 
     */
    protected override url = 'students';


    /**
     * 
     */
    constructor(
        private $base: BaseService
    ) {
        super($base)
    }

}