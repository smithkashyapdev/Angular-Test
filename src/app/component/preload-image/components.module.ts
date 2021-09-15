import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PreloadImageComponent } from './preload-image.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    PreloadImageComponent
  ],
  exports: [
    PreloadImageComponent
  ],
  entryComponents: [],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
