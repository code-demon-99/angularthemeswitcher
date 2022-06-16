import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DyanamicformsComponent } from './dyanamicforms.component';


const routes: Routes = [
  { path: "forms/:id", component: DyanamicformsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyanamicformsRoutingModule { }
