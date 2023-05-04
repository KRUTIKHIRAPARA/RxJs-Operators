import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OFComponent } from './of/of.component';
import { PipeComponent } from './pipe/pipe.component';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent,
    OFComponent,
    PipeComponent,
    FromComponent,
    FilterComponent,
    ConcatComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
