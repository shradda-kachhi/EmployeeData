import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './firstComponent/first.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DirectivesComponent } from './directives/directives.component';

const routes :Routes  =[
  {path :'basics',component :FirstComponent},
  {path : 'assignments',component :AssignmentComponent},
  {path : 'directives',component :DirectivesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],//register routes  this can be done in app module ass well
  exports: [RouterModule]
})
export class AppRoutingModule { }
