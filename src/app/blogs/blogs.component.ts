import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"]
})
export class BlogsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".blogs .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: !0,
      smartSpeed: 500,
      responsiveClass: !0,
      dots: !1,
      responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1e3: { items: 3 }
      }
    });
  }
}
