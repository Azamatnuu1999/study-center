import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SignInRoutingModule } from './sign-in.routing.module';

@NgModule({
    imports: [ 
        SignInRoutingModule,
        
        NzFormModule, 
        NzInputModule, 
        NzButtonModule, 
        ReactiveFormsModule 
    ],
    exports: [],
    declarations: [ SignInComponent ],
    providers: [],
})
export class SignInModule { }
