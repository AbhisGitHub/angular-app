import { Component, VERSION } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  sh_dashboard: boolean = true;
  sh_heroes: boolean = false;
  constructor() {}

  Dash_Click() {
    this.sh_dashboard = true;
    this.sh_heroes = false;
  }

  Heroes_Click() {
    this.sh_heroes = true;
    this.sh_dashboard = false;
  }
}
