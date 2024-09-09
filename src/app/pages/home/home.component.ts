import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Transaction {
  amount: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  transactions: Transaction[] = [
    { amount: '$50.00', date: '2023-04-18', description: 'Groceries' },
    { amount: '$25.00', date: '2023-04-16', description: 'Dining out' },
    { amount: '$100.00', date: '2023-04-15', description: 'Online shopping' },
    { amount: '$75.00', date: '2023-04-13', description: 'Utility bill' },
    { amount: '$30.00', date: '2023-04-11', description: 'Gym membership' },
    { amount: '$20.00', date: '2023-04-09', description: 'Coffee shop' },
    { amount: '$80.00', date: '2023-04-07', description: 'Car maintenance' },
    { amount: '$45.00', date: '2023-04-05', description: 'Movie tickets' },
  ];

  balance: string = '$1,250.00';

}
