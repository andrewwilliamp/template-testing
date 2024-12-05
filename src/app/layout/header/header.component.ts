import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { SidebarComponent } from '../sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [MatIconModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  private sidebarService = inject(SidebarService);

  toggleSidebar() {
  // Check if the button click event is registered
    this.sidebarService.toggleSidebar();
    // Check if the visibility state is changing
  }
}
