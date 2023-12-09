import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ ClientComponent ],
    imports: [ CommonModule, ClientRoutingModule ],
})

export class ClientModule {

}