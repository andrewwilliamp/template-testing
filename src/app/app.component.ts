import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SidebarService]
})
export class AppComponent {
  title = 'LMS';
}
