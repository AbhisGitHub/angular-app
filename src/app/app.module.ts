import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSerService } from './hero-ser.service';
import { PowerFilterPipe } from './power-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DashboardComponent, HeroesComponent, PowerFilterPipe],
  bootstrap: [AppComponent],
  providers: [HeroSerService]
})
export class AppModule {}
