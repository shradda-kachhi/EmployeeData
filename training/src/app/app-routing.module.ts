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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
