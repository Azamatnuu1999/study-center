import { NgModule } from "@angular/core";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { CommonModule } from "@angular/common";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzTableModule } from "ng-zorro-antd/table";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentAddEditComponent } from "./student-add-edit/student-add-edit.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule ({
    declarations: [ 
        StudentComponent, 
        StudentListComponent,
        StudentAddEditComponent
    ],
    imports: [ 
        CommonModule, 
        StudentRoutingModule,
        ReactiveFormsModule, 

        NzDividerModule,
        NzTableModule,
        NzButtonModule,
        NzIconModule,
        NzFormModule,
        NzInputModule,

        TranslateModule
    ]
})

export class StudentModule {

}