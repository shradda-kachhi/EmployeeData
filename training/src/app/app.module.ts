import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './firstComponent/first.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEdtComponent } from './shopping-list/shopping-edt/shopping-edt.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/first-highlight.directive';
import { CustomSTructureDirective } from './directives/structure-comp.directive';
import { appDropDownDirective } from './shared/dropdown.directive';
import { InterComponentCommmService } from './interComponent.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AssignmentComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailsComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEdtComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    CustomSTructureDirective,
 appDropDownDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InterComponentCommmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
