import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeReturn } from '../../interfaces/IEmployeeReturn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient){
  }

  public getAllEmployees(): Observable<IEmployeeReturn>{
    return this.httpClient.get<IEmployeeReturn>('http://localhost:3000/');
  }
}
