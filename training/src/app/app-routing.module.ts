import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './firstComponent/first.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DirectivesComponent } from './directives/directives.component';
import { AuthGuard } from './auth-guard.service';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RescipieStartComponent } from './recipies/rescipie-start/rescipie-start.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';

const routes :Routes  =[
  {path :'basics',component :FirstComponent},
  {path : 'assignments',/*canActivate:[AuthGuard],*/component :AssignmentComponent},
  //the canActivate tells only go to this route if AuthGuard is returning true
 //childActivate only works for child
  {path : 'directives',canActivateChild:[AuthGuard],component :DirectivesComponent,children:[
    {path : ':id/:name',component :DirectivesComponent},
]},

{path:'',redirectTo:'/recipie',pathMatch:'full'},
{path:'recipie',component:RecipiesComponent,
children:[
  {path:'',component:RescipieStartComponent},
  {path:'addNew',component:RecipieEditComponent},
  //always add the confirmed path befor the dynamic one otherwise it will not be loaded
  {path : ':id',component :RecipieDetailsComponent},
  {path:':id/edit',component:RecipieEditComponent},
]},
{path:'shopping',component:ShoppingListComponent},
//{path : '**',redirectTo:'basics'},//this is wild card route and should be kept at last
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],//register routes  this can be done in app module ass well
  exports: [RouterModule]
})
export class AppRoutingModule { }
