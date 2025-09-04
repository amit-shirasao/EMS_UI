import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeeService } from '../services/employee/employee-service';
import { IEmployeeReturn } from '../interfaces/IEmployeeReturn';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  private employeeService = inject(EmployeeService);
  // constructor(private employeeService: EmployeeService) {}

  protected employees = signal<IEmployee[]>([]);

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (employeeReturn: IEmployeeReturn) => {
        this.employees.set(employeeReturn.data);
      },
    });
  }

  handleCreateNewBtnClick() {
    let blankEmployee: IEmployee = {
      name: '',
      age: null,
      isGraduate: false,
      isInEditMode: true,
    };

    let newArray = [blankEmployee, ...this.employees()];

    this.employees.set(newArray);
  }

  handleSaveBtnClick(employee: IEmployee) {
    employee.isInEditMode = false;
    if (employee._id) {
      // Give a PUT call.
      this.updateEmployee(employee);
    } else {
      // Give a POST call.
      this.addEmployee(employee);
    }
  }

  addEmployee(employee: IEmployee) {
    delete employee.isInEditMode;

    this.employeeService.addEmployee(employee).subscribe({
      next: () => {
        this.getAllEmployees();
      },
    });
  }

  updateEmployee(employee: IEmployee) {
    delete employee.isInEditMode;

    this.employeeService.updateEmployeeById(employee._id as String, employee).subscribe({
      next: () => {
        this.getAllEmployees();
      },
    });
  }
}
