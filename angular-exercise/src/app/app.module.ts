import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanySearchComponent } from "./components/company-search/company-search.component";
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
    declarations: [
        AppComponent,
        OfficerDetailsComponent,
        AuthComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CompanySearchComponent
    ]
})
export class AppModule { }
