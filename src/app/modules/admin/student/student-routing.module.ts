import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student.component";
import { NgModule } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentAddEditComponent } from "./student-add-edit/student-add-edit.component";

const routes: Routes = [
    {
        path: '',
        component: StudentListComponent
    },
    {
        path: 'add',
        component: StudentAddEditComponent
    }, 
    {
        path: 'edit/:id',
        component: StudentAddEditComponent
    }
]

@NgModule ({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class StudentRoutingModule {

}