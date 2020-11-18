import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
@Injectable()
export class HeroSerService {
  herolist: Hero[];
  herolist_dash: Hero[];
  constructor() {
    this.herolist = [
      { id: 11, name: "Dr Nice", power: 94 },
      { id: 12, name: "Narco", power: 92 },
      { id: 13, name: "Bombasto", power: 87 },
      { id: 14, name: "Celeritas", power: 85 },
      { id: 15, name: "Magneta", power: 93 },
      { id: 16, name: "RubberMan", power: 78 },
      { id: 17, name: "Dynama", power: 77 },
      { id: 18, name: "Dr IQ", power: 84 },
      { id: 19, name: "Magma", power: 76 },
      { id: 20, name: "Tornado", power: 70 }
    ];
  }

  FilterHerolist(element, index, array) {
    return element.power > 90;
  }

  GetHeroList(value): Observable<Hero[]> {
    if (value == "Dashboard") {
      this.herolist_dash = this.herolist.filter(this.FilterHerolist);
      return of(this.herolist_dash);
    } else {
      return of(this.herolist);
    }
  }

  UpdateHero(hero: Hero, value): Observable<Hero[]> {
    for (var i = 0; i < this.herolist.length; i++) {
      if (this.herolist[i].id == hero.id) {
        this.herolist[i].name = hero.name;
        break;
      }
    }
    return this.GetHeroList(value);
  }
}
