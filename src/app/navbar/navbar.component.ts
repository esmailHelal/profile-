import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {}

  ngOnInit() {
    "use strict";
    var t = $(window);
    t.on("scroll", function() {
      var o = t.scrollTop(),
        a = $(".navbar");
      o > 300 ? a.addClass("fixed-top") : a.removeClass("fixed-top");
    }),
      $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: 15
      });
  }
}
