import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { EmployeeComponent } from "./employee/employee.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EmployeeComponent, FormsModule, CommonModule]
})
export class AppComponent {
  emp = new Employee('Mahesh', 20);	
  msg: string = 'Hello World!';

  onFormSubmit(empForm: NgForm) {
    console.log(empForm)
	  let name = empForm.controls['name'].value;
	  let age = empForm.controls['age'].value;
	  this.emp = new Employee(name, age);
  } 
}
