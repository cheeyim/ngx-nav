import { Component } from '@angular/core';
import { LibService } from 'ngx-nav';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styles: [
    'body { font-family: Open Sans, sans-serif; }'
  ]
})
export class AppComponent {
  // meaning: number;
  isMobileSidebarExpanded = false;
  isSidebarMinimized = true;
  topBarList = [
    { name: 'welcome, Demo User' },
    { name: 'sign out', icon: 'sign-out', emit: 'sign-out' }
  ];

  menuList = [
    [
      {
        'name': 'home',
        'icon': 'th-large',
        'url': '/home',
        'permissions': [1], 'ng1Prefix': '/#'
      }
    ],
    [
      {
        'apiKey': 'timesheets beta', 'name': 'timesheets', 'icon': 'clock-o', 'url': '/timesheets-beta',
        'permissions': [2], 'priority': 1, 'ng1Prefix': '/#'
      },
      {
        'name': 'bookings', 'icon': 'bookmark', 'url': '/bookings',
        'permissions': [2], 'priority': 2, 'ng1Prefix': ''
      },
      {
        'name': 'documents', 'icon': 'file-text', 'url': '/documents',
        'permissions': [2], 'priority': 4
      },
      {
        'name': 'availability', 'icon': 'calendar', 'url': '/availability',
        'permissions': [2], 'priority': 6, 'ng1Prefix': '/#'
      }
    ],
    [
      {
        'name': 'settings', 'icon': 'gear', 'permissions': [1], 'priority': 0, 'subs':
        [{ 'name': 'profile', 'icon': 'user', 'url': '/settings/profile', 'ng1Prefix': '' },
        { 'name': 'notifications', 'icon': 'bell', 'url': '/settings/notifications', 'ng1Prefix': '' },
        { 'name': 'change password', 'icon': 'get-pocket', 'url': '/settings/password', 'ng1Prefix': '' },
        { 'name': 'social login', 'icon': 'facebook', 'url': '/settings/social', 'ng1Prefix': '' }]
      },
      { 'name': 'help & support', 'icon': 'question-circle', 'priority': 1, 'emit': 'support', 'permissions': [1] }
    ],
    [
      { 'name': 'sign out', 'icon': 'sign-out', 'emit': 'sign-out', 'permissions': [1] }
    ]
  ];

  constructor(libService: LibService) {
    // this.meaning = libService.getMeaning();
  }

  toggleSidebar(isMinimized: boolean) {
    this.isSidebarMinimized = isMinimized;
  }

  toggleMobileSidebarExpanded(isExpanded: boolean) {
    this.isMobileSidebarExpanded = isExpanded;
  }

  handleMenuItemClick(emitId: string) {
    // force collapse mobile menu
    // e.g. after click on support or sign out,
    // menu should be collapsed
    this.toggleMobileSidebarExpanded(false);

    switch (emitId) {
      case 'sign-out':
        console.log('sign out');
        break;
      case 'support':
        console.log('support');
        break;
    }
  }
}
