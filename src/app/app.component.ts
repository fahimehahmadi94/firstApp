import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './employee';
import { EmpFilter, filterOption } from './empfilter';
import { MatSelectChange } from '@angular/material/select';
import {MatSort,Sort} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

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


  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'gender', 'jobtitle', 'department'];

  displayedColumnsWithObject: string[] = ['id', 'firstname', 'lastname', 'email', 'gender', 'jobtitle', 'department', 'project.name'];

  EmpData: Employee[] = [
    {
      "id": 1, "firstname": "Mellie", "lastname": "Gabbott", "email": "mgabbott0@indiatimes.com", "gender": "Female", "department": "Support", "jobtitle": "Support Analyst",
      "project":
        { name: "project1", id: 1 }
    },
    { 
      "id": 2, "firstname": "Yehudi", "lastname": "Ainsby", "email": "yainsby1@w3.org", "gender": "Female", "department": "Support", 
      "jobtitle": "Support Analyst", "project": { name: "project2", id: 2 } },
    { "id": 3, "firstname": "Noellyn", "lastname": "Primett", "email": "nprimett2@ning.com", "gender": "Female", "department": "Human Resources", "jobtitle": "Project Manager", "project": { name: "project3", id: 3 } },
    { "id": 4, "firstname": "Stefanie", "lastname": "Yurenin", "email": "syurenin3@boston.com", "gender": "Female", "department": "Marketing", "jobtitle": "Senior officer", "project": { name: "project4", id: 4 } },
    { "id": 5, "firstname": "Stormi", "lastname": "O'Lunny", "email": "solunny4@patch.com", "gender": "Female", "department": "Engineering", "jobtitle": "Software Engineer", "project": { name: "project5", id: 5 } },
    { "id": 6, "firstname": "Keelia", "lastname": "Giraudy", "email": "kgiraudy5@nba.com", "gender": "Male", "department": "Marketing", "jobtitle": "Senior officer", "project": { name: "project6", id: 6 } },
    { "id": 7, "firstname": "Ikey", "lastname": "Laight", "email": "ilaight6@wiley.com", "gender": "Male", "department": "Support", "jobtitle": "Support Analyst", "project": { name: "project7", id: 7 } },
    { "id": 8, "firstname": "Adrianna", "lastname": "Ruddom", "email": "aruddom7@seattletimes.com", "gender": "Male", "department": "Marketing", "jobtitle": "Senior officer", "project": { name: "project8", id: 8 } },
    { "id": 9, "firstname": "Dionysus", "lastname": "McCory", "email": "dmccory8@ox.ac.uk", "gender": "Male", "department": "Engineering", "jobtitle": "Software Engineer", "project": { name: "project9", id: 9 } },
    { "id": 10, "firstname": "Claybourne", "lastname": "Shellard", "email": "cshellard9@rediff.com", "gender": "Male", "department": "Engineering", "jobtitle": "Software Engineer", "project": { name: "project10", id: 10 } }];

  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithObjectColumn = new MatTableDataSource(this.EmpData);


  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();



  constructor() {
  }

  ngAfterViewInit() {

    this.empTbSort.disableClear = true;
    this.dataSource.sort = this.empTbSort;

    this.empTbSortWithObject.disableClear = true;
    this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;
    this.dataSourceWithObjectColumn.sortingDataAccessor = (row: Employee, columnName: string): string => {
      console.log(row, columnName);
      if (columnName == "project.name") return row.project.name;
      var columnValue = row[columnName as keyof Employee] as string;
      return columnValue;
    }
  }

  ngOnInit(): void {


  }
}
