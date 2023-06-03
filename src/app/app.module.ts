import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { StepsComponent } from './components/steps/steps.component';
import { TrackingService } from './services/tracking.service';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    TrackingComponent,
    StepsComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
