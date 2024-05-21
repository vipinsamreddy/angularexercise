import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router,  RouterModule } from '@angular/router';
import { ICompanySearch, Item } from 'src/app/models/company-search';
import { HttpService } from 'src/app/services/http.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
   standalone: true,
   imports:[
    RouterModule,
    CommonModule,
    MatCardModule
   ]
})
export class CompanyDetailsComponent implements OnInit {
  companies: Item[] = [];
  id: string | null = null;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCompanyDetailsByCompanyId();
    
  }

  private getCompanyDetailsByCompanyId = ()=>{
    this.httpService.get<ICompanySearch>(`search/${this.id}`).subscribe({
      next: data => {
        this.companies = data.items;
      },
      error: err => {
        console.error('Error fetching companies', err);
      },
      complete: () => {
        console.log('Companies fetched successfully');
      }
    });
  }

  public navigateToOfficerDetails =(item: Item): void =>
  {
    this.localStorage.setItem('companyName', item.title);
    this.router.navigate([`/officer/details/${item.company_number}`]);
  }
}
