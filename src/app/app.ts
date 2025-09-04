import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmployee } from '../interfaces/IEmployee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected employees = signal<IEmployee[]>([
    {
      name: 'Amit Shirasao',
      age: 40,
      isGraduate: true,
    },
    {
      name: 'Vikram Sarabhai',
      age: 60,
      isGraduate: true,
    },
    {
      name: 'APJ Abdul Kalam',
      age: 45,
      isGraduate: true,
    },
  ]);
}
