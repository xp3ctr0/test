import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from './employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnChanges {

  @Input() employee = {} as Employee;	
  @Input() message = '';	
  
  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {  
      let change = changes[propName];
      
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      
      if (propName === 'message') {
         this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'employee') {
         this.allEmployeeChangeLogs.push(changeLog);
      }
      }
  }

}
