import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() filterSelected = new EventEmitter();
  filter = {
    launch_year: '',
    launch_success: '',
    land_success: ''
  };
  yearFlag = false;
  launchYears = [];
  constructor() { }
  applyFilter(): void {

    this.filterSelected.emit(this.filter);
  }
  applyYear(value): void {
    this.yearFlag = !this.yearFlag;
    const element = document.getElementById(value);
    element.classList.add('active');
    this.filter.launch_year = value;
    this.applyFilter();
  }
  applySuccessFulLaunch(value): void {
    this.filter.launch_success = value;
    this.applyFilter();
  }
  applySuccessFulLand(value): void {
    this.filter.land_success = value;
    this.applyFilter();
  }
  ngOnInit(): void {
    for (let year = 2006; year <= 2020; year++) {
      this.launchYears.push(year);
    }
  }

}
