import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherAddEditComponent } from "./teacher-add-edit/teacher-edit.component";
import { TeacherChartComponent } from "./teacher-chart/teacher-chart.component";
import { TeacherOrgChartComponent } from "./teacher-org-chart/teacher-org-chart.component";

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
    },
    {
        path: 'chart',
        component: TeacherChartComponent
    },
    {
        path: 'orgchart',
        component: TeacherOrgChartComponent
    }
]

@NgModule ({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class TeacherRoutingModule {

}