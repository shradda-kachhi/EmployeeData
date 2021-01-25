import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './firstComponent/first.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes :Routes  =[
  {path :'basics',component :FirstComponent},
  {path : 'assignments',component :AssignmentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
