import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sap-pocs';
  tiles = [];
  query = null;
  constructor(private apiService: ApiService) {

  }

  getSpaceXdata(): void {
    this.apiService.spaceXdata(this.query)
      .subscribe((response) => {
        console.log('response', response);
        this.tiles = response.slice(0, 10);
      });
  }

  onFilterSelected(query): void {
    this.query = query;
    this.getSpaceXdata();
  }

  ngOnInit(): void {
    this.getSpaceXdata();
  }
}
