import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoteComponent } from './vote/vote.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VersionChildComponent, VersionParentComponent, VoteComponent, VoteTakerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
