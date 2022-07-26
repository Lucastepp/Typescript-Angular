import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { CoreModule } from './core/core.module';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropBindingComponent } from './components/bindings/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponent } from './components/hello/hello.component';
import { CounterActionsComponent } from './components/counter-actions/counter-actions.component';
import { FormsModule } from '@angular/forms';
import { AttBindingComponent } from './components/bindings/att-binding/att-binding.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/bindings/style-binding/style-binding.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteListItemComponent } from './components/note-list-item/note-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    StringInterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    HelloComponent,
    CounterActionsComponent,
    AttBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    NoteListComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
