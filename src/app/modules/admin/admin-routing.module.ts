import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'teacher',
                loadChildren: () => import("./teacher/teacher.module").then((m) => m.TeacherModule),
                title: 'Teacher Sahifasi'
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class AdminRoutingModule {

}