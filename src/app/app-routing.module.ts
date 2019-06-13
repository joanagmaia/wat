import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TBD: Can Activate Auth Guard
const routes: Routes = [
  { path: "", loadChildren: "../app/authentication/authentication.module#AuthenticationModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
