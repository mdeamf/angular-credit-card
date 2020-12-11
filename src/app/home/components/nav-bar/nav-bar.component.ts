import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Cartões', icon: 'pi pi-credit-card' },
      { label: 'Fatura', icon: 'pi pi-list' },
      { label: 'Serviços', icon: 'pi pi-wallet' },
    ];
  }

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }
}
