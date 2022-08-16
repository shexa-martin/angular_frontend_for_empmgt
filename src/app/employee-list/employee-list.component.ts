import { Component, OnInit } from '@angular/core';
import  { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees :  Employee[]=[];
 

  constructor(private employeeService: EmployeeService) {
    // this.employees = [];
   }

  ngOnInit(): void {
    this.getEmployees();
    // this.employees=this.getEmployees();
    // [{
    //   "id":1,
    //   "firstName":"Ruth",
    //   "lastName":"Puranayi",
    //   "emailId":"ruthp@gmail.com"
    // },{
      
    //   "id":2,
    //   "firstName":"Martin",
    //   "lastName":"Masheka",
    //   "emailId":"martin@gmail.com"
    // }];
  }
  private getEmployees(){
     this.employeeService.getEmployeesList().subscribe(data => 
      {
        this.employees = data;
      });
  }


}