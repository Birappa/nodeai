import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NumpyComponent } from './numpy/numpy.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'numpy', component:NumpyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
