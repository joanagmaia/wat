import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() menuItem: any[];

    username: string;

    constructor(private authService: AuthService) {
    }

    // ngOnInit() {
    //   this.get();
    // }

    // get() {
    //   this.authService.getUserDetails().subscribe((res) => this.username = res.displayName);
    // }

    logout() {
        this.authService.logout();
    }

}
