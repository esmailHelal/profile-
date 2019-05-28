import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(window).on("load", function() {
      $(".portfolio-items").isotope(),
        $(".portfolio-filter ul li").on("click", function() {
          $(".portfolio-filter ul li").removeClass("sel-item"),
            $(this).addClass("sel-item");
          var t = $(this).attr("data-filter");
          $(".portfolio-items").isotope({
            filter: t,
            animationOptions: { duration: 750, easing: "linear", queue: !1 }
          });
        });
    });

    $().fancybox({
      selector: ".link a"
    });
  }
}
