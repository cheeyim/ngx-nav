import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent {
  @Input()
  isMobileSidebarExpanded: boolean;

  @Input()
  list: { name: string }[];

  @Output()
  menuItemClicked: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  mobileSidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleExpanded() {
    this.mobileSidebarToggled.emit(!this.isMobileSidebarExpanded);
  }

  emitMenuItemClick(id: string) {
    this.menuItemClicked.emit(id);
  }
}
