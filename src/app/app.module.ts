import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SaveNotificationComponent } from './components/save-notification/save-notification.component';

import { NgxEchartsModule } from 'ngx-echarts';

// import the ChartModule for the Chart component
import { ChartModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SaveNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,

    MatButtonModule,
    MatSnackBarModule,

    ChartModule,

    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
