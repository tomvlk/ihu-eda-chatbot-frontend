import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { BoxComponent } from './box/box.component';
import { ChatHistoryComponent } from './chat/chat-history/chat-history.component';
import { ChatInputComponent } from './chat/chat-input/chat-input.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LinkParsingPipe } from './link-parsing.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BoxComponent,
    ChatHistoryComponent,
    ChatInputComponent,
    LinkParsingPipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
