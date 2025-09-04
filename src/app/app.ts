import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeeService } from '../services/employee/employee-service';
import { IEmployeeReturn } from '../interfaces/IEmployeeReturn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  private employeeService = inject(EmployeeService);
  // constructor(private employeeService: EmployeeService) {}

  protected employees = signal<IEmployee[]>([]);

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employeeReturn: IEmployeeReturn) => {
        this.employees.set(employeeReturn.data);
      },
    });
  }

  handleCreateNewBtnClick() {
    let blankEmployee: IEmployee = {
      name: '',
      age: 0,
      isGraduate: false,
      isInEditMode: true,
    };

    let newArray = [blankEmployee, ...this.employees()];

    this.employees.set(newArray);
  }
}
