import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FilterComponent } from './components/filter/filter.component';
import { UpdateValuesComponent } from './components/update-values/update-values.component';
import { FilterNameComponent } from './components/filter-name/filter-name.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'add',component:AddComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'filter',component:FilterComponent},
  {path:'update-values',component:UpdateValuesComponent},
  {path:'filter-name',component:FilterNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
