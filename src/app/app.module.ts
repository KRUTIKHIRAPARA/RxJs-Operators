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
import { ZipComponent } from './zip/zip.component';
import { FirstComponent } from './first/first.component';
import { PluckComponent } from './pluck/pluck.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TapComponent } from './tap/tap.component';

@NgModule({
  declarations: [
    AppComponent,
    OFComponent,
    PipeComponent,
    FromComponent,
    FilterComponent,
    ConcatComponent,
    MergeComponent,
    ZipComponent,
    FirstComponent,
    PluckComponent,
    CombineLatestComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    TapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
