import { RouterModule, Routes } from "@angular/router";
import { TeacherComponent } from "./teacher.component";
import { NgModule } from "@angular/core";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherAddEditComponent } from "./teacher-add-edit/teacher-edit.component";

const routes: Routes = [
    {
        path: '',
        component: TeacherListComponent
    },
    {
        path: 'add',
        component: TeacherAddEditComponent
    }, 
    {
        path: 'edit/:id',
        component: TeacherAddEditComponent
    }
]

@NgModule ({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class TeacherRoutingModule {

}