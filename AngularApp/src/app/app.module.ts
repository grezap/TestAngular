import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { LayoutModule } from './theme/layouts/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
