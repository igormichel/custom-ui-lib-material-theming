import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DemoPageModule } from './demo-page/demo-page.module';
import { DemoPageCdkModule } from './demo-page-cdk/demo-page-cdk.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    DemoPageModule,
    DemoPageCdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
