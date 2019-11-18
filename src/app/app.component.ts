import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngdemodirect";
  counter = 0;

  increment(event: any) {
    console.log("it works");
    ++this.counter;
  }
}
