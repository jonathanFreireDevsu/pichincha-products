import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: any[] = [];
  pageSize = 5;
  currentPage = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  // Function to change the current page
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }
}