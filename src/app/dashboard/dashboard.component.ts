import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroSerService } from "../hero-ser.service";
import { PowerFilterPipe } from "../power-filter.pipe";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  herolist: Hero[];
  heroselected: boolean = false;
  selectedhero: Hero;
  ShowList: boolean = true;
  constructor(private heroservice: HeroSerService) {}

  ngOnInit() {
    this.heroservice.GetHeroList("Dashboard").subscribe(value => {
      this.herolist = value;
    });
  }
  UpdateHero(heroform) {
    this.heroservice
      .UpdateHero(heroform.value, "Dashboard")
      .subscribe(value => {
        this.herolist = value;
      });
    this.ShowList = true;
    this.heroselected = false;
  }

  HeroClick(hero: Hero) {
    this.selectedhero = hero;
    this.heroselected = true;
    this.ShowList = false;
  }
}
