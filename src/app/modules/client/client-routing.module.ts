import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";

const routes: Routes = [
    {
        path: '',
        component: ClientComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule ({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class ClientRoutingModule {

}