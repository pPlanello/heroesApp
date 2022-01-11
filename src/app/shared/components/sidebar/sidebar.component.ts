import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get auth() {
    return this.authService.auth;
  }

  hideButton: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  showButtonMenu() {
    this.hideButton = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
