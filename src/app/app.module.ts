import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { QaDashboardComponent } from './qa-dashboard/qa-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatProgressBarModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientsDashboardComponent,
    QaDashboardComponent,
    AdminDashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
