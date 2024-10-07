import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,MatToolbarModule,
    FooterComponent,NavComponent,MatSidenavModule,MatListModule,MatIconModule,MatCardModule]

 
})
export class AppComponent {
  title = 'bookstore-front';
}
