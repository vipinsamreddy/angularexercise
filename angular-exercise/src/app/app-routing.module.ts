import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';
import { AuthGuard } from './services/AuthGuard';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: CompanySearchComponent },
  { path: 'details/:id', component: CompanyDetailsComponent,  canActivate: [AuthGuard] },
  { path: 'unauthorised', component: AuthComponent},
  { path: 'officer/details/:id', component: OfficerDetailsComponent,  canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
