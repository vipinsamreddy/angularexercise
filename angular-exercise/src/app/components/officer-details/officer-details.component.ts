import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOfficer, Item } from 'src/app/models/IOfficer';
import { HttpService } from 'src/app/services/http.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-officer-details',
  templateUrl: './officer-details.component.html',
  styleUrls: ['./officer-details.component.scss']
})

export class OfficerDetailsComponent {

  officers: Item[] = [];
  id: string | null = null;
  companyName: string  = "";
  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
this.companyName = this.localStorage.getItem("companyName");
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCompanyDetailsByCompanyId();
    
  }

  private getCompanyDetailsByCompanyId = ()=>{
    this.httpService.get<IOfficer>(`Officers/${this.id}`).subscribe({
      next: data => {
        this.officers = data.items;
      },
      error: err => {
        console.error('Error fetching companies', err);
      },
      complete: () => {
        console.log('Companies fetched successfully');
      }
    });
  }
}
