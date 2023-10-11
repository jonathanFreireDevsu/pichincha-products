import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { RawData } from '../interfaces/raw-data';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService,
  ) {
  }

  filterValue = '';
  filteredData: RawData[] = [];
  data: RawData[] = [];
  loading = false;
  refreshSignal = true;

  handleChangeInput($event: {
    id: 'id' | 'name' | 'logo' | 'description' | 'freeDate' | 'revisionDate',
    value: any
  }) {
    const {value} = $event;
    this.filterValue = value
    this.filteredData = this.data.filter((item) => (
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  addProduct() {
    this.router.navigate(['agregar-producto']);
  }

  refresh() {
    this.dataService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.dataService.data$.subscribe((data) => {
      this.data = data;
      this.filteredData = data;
    });

    this.dataService.get().subscribe((data) => {
      this.dataService.setData(data);
    });
  }
  ngOnInit(): void {
    this.refresh()
  }
}
