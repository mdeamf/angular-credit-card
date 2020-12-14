import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css'],
})
export class LoginHeaderComponent implements OnInit {
  @Input() subtitle: string;

  constructor() {}

  ngOnInit(): void {}
}
