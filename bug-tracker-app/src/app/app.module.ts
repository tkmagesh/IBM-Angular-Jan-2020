import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugStatsComponent  } from "./bugTracker/views/bugStats.component";
import { BugOperationsService } from "./bugTracker/services/bugOperations.service";

import { ClosedCountPipe } from "./bugTracker/pipes/closedCount.pipe";
import { TrimTextPipe } from "./bugTracker/pipes/trimText.pipe";
import { SortPipe } from "./bugTracker/pipes/sort.pipe";
@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
