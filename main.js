gsap.registerPlugin(ScrollTrigger);

gsap.to(".navi", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top 500px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "rgb(0, 0, 0)",
  height: 100,
  ease: "power1.out",
  duration: 0.5,
  borderBottom: "solid 3pxrgb(255, 255, 255)"
});

gsap.to(".container2, .container1", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top 500px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "rgb(50, 122, 189)",
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".container4, #carousel1, .title3, .content3-1, .container5, .container6, body, .navi", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 1100px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "rgb(13, 143, 218)",
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".next-button1", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top 400px",
    toggleActions: "play complete play reverse"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".next-button2", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 400px",
    toggleActions: "play complete play reverse"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".next-button3", {
  scrollTrigger: {
    trigger: "#personal_interest",
    start: "top 400px",
    toggleActions: "play complete play reverse"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".next-button4", {
  scrollTrigger: {
    trigger: "#personal_interest",
    start: "top 400px",
    toggleActions: "play complete play reverse"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 0.5
});

gsap.from(".me", {
  scrollTrigger: {
    trigger: ".me",
    start: "bottom bottom",
    toggleActions: "play complete play"
  },
  scale: 1.1,
  x: 100,
  opacity: 0.8,
  ease: "power1.out",
  duration: 1.5
});

//loading animations

tl1 = new TimelineMax();

tl1.from(".navi", {
  opacity: 0,
  ease: "power1.out",
  duration: 1
});

tl1.from(".planet", {
  scale: 1.1,
  ease: "power1.out",
  duration: 1
}, "-=0.7");

tl1.from(".big-title", {
  opacity: 0,
  ease: "power1.out",
  duration: 1,
}, "-=0.5");

// tl5 = new TimelineMax();

gsap.from(".content2", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
});
gsap.from(".image2", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
},"-=1");

gsap.from(".title3", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
});
gsap.from(".content3", {
  scrollTrigger: {
    trigger: ".content3",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
},"-=1");

gsap.from(".title4", {
  scrollTrigger: {
    trigger: ".title4",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
});
gsap.from(".wrapper4", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
},"-=1");

gsap.from(".container5", {
  scrollTrigger: {
    trigger: "#awards",
    start: "top 200px",
    toggleActions: "play complete play"
  },
  opacity: 0,
  ease: "power1.out",
  duration: 1.5
},"-=1");

var tl = new TimelineMax({repeat: -1, yoyo:true});

tl.to(".next-button1",{y:-50 ,duration: 1, ease:"power1.in"});
tl.to(".next-button1",{y:0, duration:1, ease:"power1.out"});

var tl2 = new TimelineMax({repeat: -1, yoyo:true});

tl2.to(".next-button2",{y:-50 ,duration: 1, ease:"power1.in"});
tl2.to(".next-button2",{y:0, duration:1, ease:"power1.out"});

var tl3 = new TimelineMax({repeat: -1, yoyo:true});

tl3.to(".next-button3",{y:-50 ,duration: 1, ease:"power1.in"});
tl3.to(".next-button3",{y:0, duration:1, ease:"power1.out"});

var tl4 = new TimelineMax({repeat: -1, yoyo:true});

tl4.to(".default-text",{opacity:0.4 ,duration: 1, ease:"power1.in"});
tl4.to(".default-text",{opacity:1, duration:1, ease:"power1.out"});

var tl5 = new TimelineMax({repeat: -1, yoyo:true});

tl5.to(".next-button4",{y:-50 ,duration: 1, ease:"power1.in"});
tl5.to(".next-button4",{y:0, duration:1, ease:"power1.out"});

var tl6 = new TimelineMax({repeat: -1, yoyo:true});

tl6.to(".next-button5",{y:-50 ,duration: 1, ease:"power1.in"});
tl6.to(".next-button5",{y:0, duration:1, ease:"power1.out"});

$(".CAD1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".cad", {className: "overlay cad active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".cad", {className: "overlay cad -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".CFD1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".cfd", {className: "overlay cfd active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".cfd", {className: "overlay cfd -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".FEA1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".fea", {className: "overlay fea active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".fea", {className: "overlay fea -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".GDT1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".gdt", {className: "overlay gdt active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".gdt", {className: "overlay gdt -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".PID1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".pid", {className: "overlay pid active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".pid", {className: "overlay pid -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".CPP1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".cpp", {className: "overlay cpp active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".cpp", {className: "overlay cpp -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".PY1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".py", {className: "overlay py active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".py", {className: "overlay py -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".ARD1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".ard", {className: "overlay ard active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".ard", {className: "overlay ard -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".MAT1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".mat", {className: "overlay mat active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".mat", {className: "overlay mat -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

$(".EXC1").hover(
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1.05,
      color: "#f0776e"
    });
    gsap.set(".default", {className: "overlay default -=active"});
    gsap.set(".exc", {className: "overlay exc active"});
  },
  function () {
    gsap.to(this , {
      duration: 0.5,
      scale: 1,
      color: "#fff"
    });
    gsap.set(".exc", {className: "overlay exc -=active"});
    gsap.set(".default", {className: "overlay default active"});
  }
);

//navbar animation

var position = 10000;
var navHeight = -1 * parseInt($(".navi").css("height")) - 20;

$(window).on("scroll", function() {
  var curPosition = $(window).scrollTop();
  // if (curPosition >  parseInt($(window).height())) {
    if (position < curPosition && curPosition > 0) {
      gsap.to(".navi", {
        y: navHeight,
        duration: 1.3
      });
    } else {
      gsap.to(".navi", {
        y: 0,
        duration: 1
      });
    }
    position = curPosition;
  //}
});

gsap.to(".earth-image", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 500px",
    scrub: ".earth-image",
    toggleActions: "play complete play reverse"
  },
  scale: 2.5,
  y: 0,
  ease: "power1.out",
  duration: 5.5
});

gsap.to(".footer-main", {
  scrollTrigger: {
    trigger: ".footer-main",
    // start: "top bottom",
    toggleActions: "play complete play reverse"
  },
  opacity: 1,
  ease: "power1.out",
  delay: 0.5,
  duration: 1.5
});

$(".bar").click(function() {
  gsap.to(".menu", {
    x: "40vw",
    duration:1,
    ease:"power1.out"
  });
  $(".menu").css("visibility", "visible");
  $(".close").css("visibility", "visible");
  $(".bar").css("visibility", "hidden");
});

$(".close").click(function() {
  gsap.to(".menu", {
    x: "-40vw",
    duration:1,
    ease:"power1.in"
  });
  $(".close").css("visibility", "hidden");
  $(".bar").css("visibility", "visible");
});

// ----------------------------------------------
gsap.to(".nav-title, .nav-item", {
  scrollTrigger: {
    trigger: "#menu",
    start: "top 600px",
    toggleActions: "play complete play reverse"
  },
  top: -10,
  scale: 0.9,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".nav-title, .nav-item", {
  scrollTrigger: {
    trigger: "#menu",
    start: "top 600px",
    toggleActions: "play complete play reverse"
  },
  top: -10,
  scale: 0.9,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".nav-title, .nav-item", {
  scrollTrigger: {
    trigger: "#menu",
    start: "top 600px",
    toggleActions: "play complete play reverse"
  },
  top: -10,
  scale: 0.9,
  ease: "power1.out",
  duration: 0.5
});

$(".nav-link").hover(function() {
  $(this).css("border-bottom", "1px solid white");
}, function() {
  $(this).css("border-bottom", "none");
});

$(".nav-title").hover(function() {
  $(this).css("color", "#FFF3E2");
}, function() {
  $(this).css("color", "#fff");
});

$(".nav-arrow").hover(function() {
   $(this).css("color", "#00A1AB");
   $(this).css("right", "20%");
}, function() {
  $(this).css("color", "#3D56B2");
  $(this).css("right", "25%");
});

gsap.from(".pic1", {
  scrollTrigger: {
    trigger: ".pic1",
    start: "top bottom",
    toggleActions: "play complete play reverse"
  },
  scale: 1.1,
  x: -200,
  opacity: 0.8,
  ease: "power1.out",
  duration: 1.5
});

// gsap.from(".arrow1", {
//   scrollTrigger: {
//     trigger: ".pic1",
//     start: "top bottom",
//     // toggleActions: "play complete play reverse"
//   },
//   x: 100,
//   ease: "power1.out",
//   duration: 1.5
// });

gsap.from(".pic2", {
  scrollTrigger: {
    trigger: ".pic2",
    start: "top bottom",
    // toggleActions: "play complete play reverse"
  },
  scale: 1.1,
  x: 200,
  opacity: 0.8,
  ease: "power1.out",
  duration: 1.5
});

// gsap.from(".arrow2", {
//   scrollTrigger: {
//     trigger: ".pic2",
//     start: "top bottom",
//     toggleActions: "play complete play reverse"
//   },
//   x: -100,
//   ease: "power1.out",
//   duration: 1.5
// });

