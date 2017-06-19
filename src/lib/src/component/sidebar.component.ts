import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @Input()
  menuList: any[];

  @Input()
  isSidebarMinimized: boolean;

  @Input()
  isMobileSidebarExpanded: boolean;

  @Output()
  mobileSidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  sideBarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  menuItemClicked: EventEmitter<string> = new EventEmitter<string>();

  toggleSidebar() {
    this.sideBarToggled.emit(!this.isSidebarMinimized);
  }

  emitMenuItemClick(id: string) {
    this.menuItemClicked.emit(id);
    this.toggleMobileSidebar();
  }

  toggleMobileSidebar() {
    this.mobileSidebarToggled.emit(!this.isMobileSidebarExpanded);
  }
}
