import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
  {
    "path": "",
    "component": ThemeComponent,
    //"canActivate": [AuthGuard],
    "children": [
      {
        "path": "angular\/ng-bootstrap",
        "loadChildren": ".\/pages\/default\/angular\/ng-bootstrap\/ng-bootstrap.module#NgBootstrapModule"
      },
      {
        "path": "angular\/primeng",
        "loadChildren": ".\/pages\/default\/angular\/primeng\/primeng.module#PrimengModule"
      },
      // {
      //     "path": "index",
      //     "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
      // },            
      {
        "path": "index",
        "loadChildren": ".\/pages\/default\/blank\/blank.module#BlankModule"
      },
      {
        "path": "",
        "redirectTo": "index",
        "pathMatch": "full"
      }
    ]
  },
  {
    "path": "**",
    "redirectTo": "404",
    "pathMatch": "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
