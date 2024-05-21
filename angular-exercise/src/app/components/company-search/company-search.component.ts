import { HttpService } from 'src/app/services/http.service';
import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ICompanySearch, Item } from 'src/app/models/company-search';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    RouterModule
  ],
})

export class CompanySearchComponent {
  companies: Item[] = [];
  dataSource: Item[] = [];

  formControl = new FormControl('', [Validators.required]);
  pageSize = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService) { }

  onSubmit(): void {
    if (this.formControl.valid) {
      this.httpService.get<ICompanySearch>(`search/${this.formControl.value}`).subscribe({
        next: data => {

          if (data.items.length > this.pageSize)
            this.companies = data.items.slice(0, this.pageSize);
          
          this.dataSource = data.items;

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

  updateDisplayedCompanies() {
    this.companies = this.dataSource.slice(this.paginator.pageIndex, this.paginator.pageSize);
  }

  onPageChange(event: PageEvent) {
    this.updateDisplayedCompanies();
  }
}
