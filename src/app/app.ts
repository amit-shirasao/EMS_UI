import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmployee } from '../interfaces/IEmployee';
import { EmployeeService } from '../services/employee/employee-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  private employeeService = inject(EmployeeService);
  // constructor(private employeeService: EmployeeService) {}

  protected employees = signal<IEmployee[]>([]);
}
