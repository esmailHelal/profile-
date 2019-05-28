import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".testimonials .owl-carousel").owlCarousel({
      items: 1,
      loop: !0,
      autoplay: !0,
      smartSpeed: 500,
      dotsEach: true
    });
    $(".owl-theme .owl-dots .owl-dot span").css("width", "20px");
  }
}
