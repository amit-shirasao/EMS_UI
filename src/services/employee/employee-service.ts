import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeReturn } from '../../interfaces/IEmployeeReturn';
import { Observable } from 'rxjs';
import { IEmployee } from '../../interfaces/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  public getAllEmployees(): Observable<IEmployeeReturn> {
    return this.httpClient.get<IEmployeeReturn>('http://localhost:3000/');
  }

  public addEmployee(newEmployee: IEmployee): Observable<IEmployeeReturn> {
    return this.httpClient.post<IEmployeeReturn>('http://localhost:3000/', newEmployee);
  }

  public updateEmployeeById(id: String, updatedEmployee: IEmployee): Observable<IEmployeeReturn> {
    return this.httpClient.put<IEmployeeReturn>(`http://localhost:3000/${id}`, updatedEmployee);
  }
}
