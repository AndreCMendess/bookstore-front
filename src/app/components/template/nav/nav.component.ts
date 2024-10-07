import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule,MatListModule,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
