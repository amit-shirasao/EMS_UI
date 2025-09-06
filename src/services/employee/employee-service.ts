import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeReturn } from '../../interfaces/IEmployeeReturn';
import { Observable } from 'rxjs';
import { IEmployee } from '../../interfaces/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private serviceUrl: string = 'https://ems-api.shirasao.com/';
  constructor(private httpClient: HttpClient) {}

  public getAllEmployees(): Observable<IEmployeeReturn> {
    return this.httpClient.get<IEmployeeReturn>(this.serviceUrl);
  }

  public addEmployee(newEmployee: IEmployee): Observable<IEmployeeReturn> {
    return this.httpClient.post<IEmployeeReturn>(this.serviceUrl, newEmployee);
  }

  public updateEmployeeById(id: String, updatedEmployee: IEmployee): Observable<IEmployeeReturn> {
    return this.httpClient.put<IEmployeeReturn>(`${this.serviceUrl}${id}`, updatedEmployee);
  }

  public removeEmployeeById(id: String): Observable<IEmployeeReturn> {
    return this.httpClient.delete<IEmployeeReturn>(`${this.serviceUrl}${id}`);
  }
}
