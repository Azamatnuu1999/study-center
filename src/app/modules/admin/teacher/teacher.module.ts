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

@NgModule ({
    declarations: [ 
        TeacherComponent, 
        TeacherListComponent,
        TeacherAddEditComponent
    ],
    imports: [ 
        CommonModule, 
        TeacherRoutingModule, 
        NzDividerModule,
        NzTableModule,
        NzButtonModule,
        NzIconModule
    ]
})

export class TeacherModule {

}