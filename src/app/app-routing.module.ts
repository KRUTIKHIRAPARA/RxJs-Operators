import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OFComponent } from './of/of.component';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path:'of',
    component:OFComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'from',
    component:FromComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'concat',
    component:ConcatComponent
  },
  {
    path:'merge',
    component:MergeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
