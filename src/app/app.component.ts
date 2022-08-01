import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Friends } from './interface/friends';
import { MatSort } from '@angular/material/sort';


const EmpData: Friends[] = [
  {
    id: 1,
    'firstname': 'fahimeh',
    'lastname': 'ahmadi',
    'email': 'mgabbott0@indiatimes.com',
    'gender': 'Female',
    'department': 'Support',
    'jobtitle': 'Support Analyst',

  },
  {
    id: 2,
    'firstname': 'morteza',
    'lastname': 'nejat',
    'email': 'yainsby1@w3.org',
    'gender': 'male',
    'department': 'Support',
    'jobtitle': 'Support Analyst'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fahimeh';
  isActive = false;


  displayedColumns: string[] =
    [
      'id',
      'firstname',
      'lastname',
      //'email',
      'gender',
      // 'jobtitle',
      // 'department'
    ];


  dataSource = new MatTableDataSource(EmpData);
  dataSourceWithObjectColumn = new MatTableDataSource(EmpData);


  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor() {
  }

  ngAfterViewInit() {
    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;
  }

  ngOnInit(): void { }
}
