import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./modules/sign-in/guard/auth.guard";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
    },
    {
        path: 'client',
        loadChildren: () => import('./modules/client/client.module').then((m) => m.ClientModule),
        title: 'Client sahifasi'
    },
    {
        path: 'admin',
        loadChildren() {
            return import('./modules/admin/admin.module').then((m) => m.AdminModule)
        },
        title: 'Admin sahifasi',
        canActivate: [ AuthGuard ]
    },
    {
        path: 'sign-in',
        loadChildren() {
            return import('./modules/sign-in/sign-in.module').then((m) => m.SignInModule)
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}