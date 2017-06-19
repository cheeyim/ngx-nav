import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LibComponent } from './component/lib.component';
import { TopBarComponent } from './component/top-bar.component';
import { SidebarComponent } from './component/sidebar.component';
import { LibService } from './service/lib.service';

@NgModule({
  declarations: [
    LibComponent,
    TopBarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [LibService],
  exports: [
    LibComponent,
    TopBarComponent,
    SidebarComponent
  ]
})
export class LibModule { }
