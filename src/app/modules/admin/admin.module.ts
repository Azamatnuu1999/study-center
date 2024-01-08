import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { TranslateModule } from "@ngx-translate/core";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ 
        AdminComponent 
    ],
    imports: [ 
        CommonModule, 
        AdminRoutingModule, 
        NzLayoutModule, 
        NzIconModule,
        NzBreadCrumbModule,
        NzMenuModule,
        TranslateModule,
        NzSelectModule,
        FormsModule
    ],
})

export class AdminModule {

}