import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroSerService } from "../hero-ser.service";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  herolist: Hero[];
  heroselected: boolean = false;
  selectedhero: Hero;
  ShowList: boolean = true;
  constructor(private heroservice: HeroSerService) {}

  ngOnInit() {
    this.heroservice.GetHeroList("Heroes").subscribe(value => {
      this.herolist = value;
    });
  }

  HeroClick(hero: Hero) {
    this.selectedhero = hero;
    this.heroselected = true;
    this.ShowList = false;
  }

  UpdateHero(heroform) {
    this.heroservice.UpdateHero(heroform.value, "Heroes").subscribe(value => {
      this.herolist = value;
    });
    this.ShowList = true;
    this.heroselected = false;
  }
}
