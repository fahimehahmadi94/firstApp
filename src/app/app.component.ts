import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { Employee } from './employee';
import { EmpFilter, filterOption } from './empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface Employee {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  gender: string,
  jobtitle: string,
  department: string
}

const EmpData: Employee[] = [
  {
    "id": 1,
    "firstname": "Mellie",
    "lastname": "Gabbott",
    "email": "mgabbott0@indiatimes.com",
    "gender": "Female",
    "department": "Support",
    "jobtitle": "Support Analyst",

  },
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fahimeh';
  isActive = false;

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;




  // displayedColumnsWithObject: string[] = ['id', 'firstname', 'lastname', 'email', 'gender', 'jobtitle', 'department', 'project.name'];

  displayedColumns: string[] =
    [
      'id',
      'firstname',
      'lastname',
      'email',
      'gender',
      'jobtitle',
      'department'
    ];


  // EmpData: Employee[] = [
  //   {
  //     "id": 1,
  //     "firstname": "Mellie",
  //     "lastname": "Gabbott",
  //     "email": "mgabbott0@indiatimes.com",
  //     "gender": "Female",
  //     "department": "Support",
  //     "jobtitle": "Support Analyst",
  //     "project":
  //       { name: "project1", id: 1 }
  //   },
  // ];

  dataSource = new MatTableDataSource(EmpData);
  dataSourceWithObjectColumn = new MatTableDataSource(EmpData);


  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();



  constructor() {
  }

  ngAfterViewInit() {

    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;

    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    // this.dataSourceWithObjectColumn.sortingDataAccessor = (row: Employee, columnName: string): string => {
    //   console.log(row, columnName);
    //   if (columnName == "project.name") return row.project.name;
    //   var columnValue = row[columnName as keyof Employee] as string;
    //   return columnValue;
    // }
  }

  ngOnInit(): void {


  }
}
