import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {
    (function() {
      if ($("section.stats").length > 0) {
        var t = 0;
        $(window).on("scroll", function() {
          var o = $("section.stats").offset().top - window.innerHeight;
          0 == t &&
            $(window).scrollTop() > o &&
            ($("section.stats .single-stat .counter").each(function() {
              var t = $(this),
                o = t.attr("data-count");
              console.log(o);
              $({ countNum: 0 }).animate(
                { countNum: o },
                {
                  duration: 3000,
                  easing: "swing",
                  step: function() {
                    t.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    t.text(this.countNum);
                  }
                }
              );
            }),
            (t = 1));
        });
      }
    })();
  }
  ngOnInit() {}
}
