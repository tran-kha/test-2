import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPlayerPageRoutingModule } from './video-player-routing.module';

import { VideoPlayerPage } from './video-player.page';
import { SharedModule } from '../../../features/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPlayerPageRoutingModule,
  ],
  declarations: [VideoPlayerPage],
})
export class VideoPlayerPageModule {}
