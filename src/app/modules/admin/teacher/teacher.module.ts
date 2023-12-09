import { NgModule } from "@angular/core";
import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherComponent } from "./teacher.component";
import { CommonModule } from "@angular/common";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzTableModule } from "ng-zorro-antd/table";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherAddEditComponent } from "./teacher-add-edit/teacher-edit.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule ({
    declarations: [ 
        TeacherComponent, 
        TeacherListComponent,
        TeacherAddEditComponent
    ],
    imports: [ 
        CommonModule, 
        TeacherRoutingModule,
        ReactiveFormsModule, 

        NzDividerModule,
        NzTableModule,
        NzButtonModule,
        NzIconModule,
        NzFormModule,
        NzInputModule
    ]
})

export class TeacherModule {

}