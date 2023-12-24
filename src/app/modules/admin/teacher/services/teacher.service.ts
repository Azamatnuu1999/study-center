import { Injectable } from "@angular/core";
import { TeachersRequest, TeachersResponse } from "../models/teacher.model";
import { BaseService } from "../../shared/services/base.service";
import { CRUDService } from "../../shared/services/crud.service";

@Injectable({
    providedIn: 'root'
})

export class TeacherService extends CRUDService<
  TeachersResponse, 
  TeachersRequest
> {
    /**
     * 
     */
    protected override url = 'teachers';


    /**
     * 
     */
    constructor(
        private $base: BaseService
    ) {
        super($base)
    }

}