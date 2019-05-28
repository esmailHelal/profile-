import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var t = $(window);
    $("#slides").superslides({
      slide_easing: "easeInOutCubic",
      animation: "fade",
      slide_speed: 800,
      play: 2000,
      pagination: false
    });
    $("#typing").typer({
      strings: ["Greate Website", "Developing UI"]
    });
    function o() {
      $("#home").css({ height: $(window).height() + "px" });
    }
    o(), t.resize(o);
  }
}
