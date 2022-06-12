import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GifService } from '../gifs/services/gif.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule],
  exports: [SidebarComponent],
  providers: [GifService],
})
export class SharedModule {}
