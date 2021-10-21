import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';

const routes: Routes = [
  {component:AddResturantComponent,path:"add"},
  {component:UpdateResturantComponent,path:"update"},
  {component:ListResturantComponent,path:"list"},
  {component:LoginComponent,path:"login"},
  {component:RegisterComponent,path:"register"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
