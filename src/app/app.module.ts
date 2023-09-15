import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import {
  remixYoutubeFill,
  remixTwitterFill,
  remixDribbbleFill,
  remixInstagramLine,
  remixMenuLine,
  remixAddLine,
} from '@ng-icons/remixicon';
import { bootstrapSend } from '@ng-icons/bootstrap-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    FooterComponent,
    TestimonialComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({
      remixYoutubeFill,
      remixTwitterFill,
      remixDribbbleFill,
      remixInstagramLine,
      bootstrapSend,
      remixMenuLine,
      remixAddLine,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
