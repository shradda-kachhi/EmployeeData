import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './firstComponent/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ShoppingService } from './shopping-list/shopping.service';
import { AuthGuard } from './auth-guard.service';
import { DummyAuthenticator } from './dummy-authenticator.service';
import { RescipieStartComponent } from './recipies/rescipie-start/rescipie-start.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { LoginFormComponent } from './login-form/login-form.component';

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
 appDropDownDirective,
 RescipieStartComponent,
 RecipieEditComponent,
 LoginFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [InterComponentCommmService,ShoppingService,AuthGuard,DummyAuthenticator],
  bootstrap: [AppComponent]
})
export class AppModule { }
