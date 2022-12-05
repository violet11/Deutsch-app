import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarveComponent } from './components/barve/barve.component';
import { DolocniCleniComponent } from './components/dolocni-cleni/dolocni-cleni.component';
import { FirstPageComponent } from './components/first-page/first-page.component';

const routes: Routes = [ 
  { path: '', component: FirstPageComponent},
  { path: 'barve', component: BarveComponent},
  { path: 'dolocni-cleni', component: DolocniCleniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


