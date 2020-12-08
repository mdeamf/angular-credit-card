import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  showIntro: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showIntro = true;
      setTimeout(() => {
        this.router.navigate(['/login'])
      }, 4500);
    }, 2000);
  }

}
