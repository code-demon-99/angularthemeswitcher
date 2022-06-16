import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: "forms",
    loadChildren: () =>
      import("./dyanamicforms/dyanamicforms.module").then(
        mod => mod.DyanamicformsModule
      ),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
