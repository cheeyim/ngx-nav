import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './component/top-bar.component';
import { SidebarComponent } from './component/sidebar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    TopBarComponent,
    SidebarComponent
  ]
})
export class NavModule { }
