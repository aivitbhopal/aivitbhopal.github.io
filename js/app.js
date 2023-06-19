gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
console.log("running");

const header = document.querySelector('.hero-main-heading');
const subheader = document.querySelector('.hero-main-sub');
const tags = document.querySelector('.hero-main-tags');
const bottomBar = document.querySelector('.bottom-bar');

let t1 = gsap.timeline({ paused: true, reversed: true });
t1.play();
gsap.defaults({
    duration: 1,
});
t1.from(
    header,
    {
        ease: "elastic.out(1, 0.5)",
        x: -1000,
    }
);
t1.from(
    bottomBar,
    {
        x: 1400,
        ease: "back.out(1)",
        duration: 0.5
    }
).from(
    ".bottom-bar img",
    {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
    },
    "<0.2"
);
t1.from(
    subheader,
    {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.8
    }
).from(
    tags,
    {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 0.8
    },
    "<0.1"
);

show_hide_nav();

function show_hide_nav(){
    const show_hide_nav = gsap.from(bottomBar, {
        xPercent: 100,
        duration: 0.5,
        ease: "sine.out",

    });
    ScrollTrigger.create({
        onUpdate: (self)=>{
            if(self.direction === -1) show_hide_nav.play();
            else show_hide_nav.reverse();
        }
    })
};

gsap.from(".body-container", {
    duration: 1, 
    y: 300,
    opacity: 0,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: ".body-container",
        // markers: true,
        start: "top-=200 90%",
        toggleActions: "play none none reverse",
    }
});
gsap.from([".about-container img", ".about-container p"], {
    duration: 1,
    opacity: 0,
    pin: true,
    scrollTrigger:{
        trigger: ".body-container",
        // markers: true,
        start: "top-=200 90%",
        toggleActions: "play none none reverse",
    }
});

gsap.from([".timeline-contents div"], {
    duration: 1, 
    stagger: 0.2,
    delay: 0.5,
    y: 300,
    opacity: 0,
    ease: "power4.out",
    pin: true,
    scrollTrigger:{
        trigger: "#row1",
        // markers: true,
        start: "top-=100 90%",
        toggleActions: "play none none reverse",
    }
},">0.5");

function timeline_main_animations() {
    var mobile_view = window.matchMedia('(max-width: 600px)').matches;

    console.log(mobile_view);

    if (!mobile_view){
        gsap.from("#card1", {
            duration: 1.2,
            x: -200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row1",
                // markers: true,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#icon1", {
            duration: 1.2,
            y: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row1",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#time1", {
            duration: 1.2,
            x: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row1",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        
        gsap.from("#card2", {
            duration: 1.2,
            x: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row2",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#icon2", {
            duration: 1.2,
            y: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row2",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#time2", {
            duration: 1.2,
            x: -200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row2",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#card3", {
            duration: 1.2,
            x: -200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row3",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#icon3", {
            duration: 1.2,
            y: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row3",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#time3", {
            duration: 1.2,
            x: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row3",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#card4", {
            duration: 1.2,
            x: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row4",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#icon4", {
            duration: 1.2,
            y: 200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row4",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from("#time4", {
            duration: 1.2,
            x: -200,
            opacity: 0,
            ease: "power4.out",
            pin: true,
            scrollTrigger:{
                trigger: "#row4",
                markers: false,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
        
    }
}

window.addEventListener('onload', timeline_main_animations)

window.addEventListener("resize", timeline_main_animations)

timeline_main_animations()

// ROCKET ANIMATION ---------------------------------------------------------------------
// ROCKET ANIMATION ---------------------------------------------------------------------
// ROCKET ANIMATION ---------------------------------------------------------------------
gsap.from("#rocket-img",{
    opacity: 1,
    y: -1500,
    // ease: "elastic.out(1, 0.3)",
    pin: true,
    scrollTrigger:{
        trigger: "#rocket-img",
        markers: false,
        start: "top center+=250",
        scrub: 1,
        toggleActions: "play none none reverse",
    }
}
);


gsap.from(".event_container .container_heading", {
    duration: 1, 
    y: 300,
    opacity: 0,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: ".event_container",
        // markers: true,
        start: "top bottom",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".event_container .sub-container .card", {
    duration: 0.3, 
    y: 300,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: ".event_container",
        // markers: true,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


gsap.from("#speakers .container_heading", {
    duration: 1, 
    y: 300,
    opacity: 0,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: "#speakers",
        // markers: true,
        start: "top-=100 bottom",
        toggleActions: "play none none reverse",
    }
});
gsap.from("#speakers .speakers .speaker-container", {
    duration: 0.9, 
    y: 300,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.inOut",
    pin: true,
    scrollTrigger:{
        trigger: "#speakers",
        // markers: true,
        start: "top 90%",
        toggleActions: "play none none reverse",
    }
});
const glitch = document.querySelector('.glitch-effect');
const tl = new TimelineMax({
  id: 'getGlitch',
  repeat: -1,
  repeatDelay: 3
});
tl.fromTo(glitch, 0.1, {
  x: 0
}, {
  x: 5,
  ease: SteppedEase.config(2),
  className: '+=active'
}).fromTo(glitch, 0.5, {
  y: 0
}, {
  y: -5,
  ease: Linear.easeNone
}).fromTo(glitch, 0.5, {
  y: -5
}, {
  y: 0,
  ease: Linear.easeNone
}).set(glitch, {
  className: '+=slice'
}).to(glitch, 0.2, {
  x: -5,
  ease: SteppedEase.config(1)
}).set(glitch, {
  className: '-=slice'
}).to(glitch, 0.2, {
  x: 5,
  ease: SteppedEase.config(1)
}).to(glitch, 0.5, {
  x: 0,
  ease: SteppedEase.config(1)
}).fromTo(glitch, 0.5, {
  x: 0
}, {
  x: 2,
  ease: SteppedEase.config(2),
  className: '-=active'
}).fromTo(glitch, 0.2, {
  x: 0
}, {
  x: 2,
  ease: SteppedEase.config(2),
  delay: 1,
  className: '+=active'
}).set(glitch, {
  className: '-=active'
}).fromTo(glitch, 0.2, {
  x: 0
}, {
  x: 2,
  ease: SteppedEase.config(2),
  repeat: 1,
  delay: 1,
  className: '+=active'
}).set(glitch, {
  className: '-=active'
});

// gsap.from("#sponsors", {
//     duration: 1.3, 
//     x: 400,
//     opacity: 0,
//     ease: "power4.inOut",
//     pin: true,
//     scrollTrigger:{
//         trigger: "#sponsors",
//         markers: false,
//         start: "top-=50 bottom",
//         toggleActions: "play none none reverse",
//     }
// });

// let t2 = gsap.timeline({ 
//     scrollTrigger: {
//         trigger: ".footer-container",
//         start: "top-=100 bottom", // when the top of the trigger hits the top of the viewport
//         end: "bottom-=300 bottom", // end after scrolling 500px beyond the start
//         // markers: true,
//         pin: true,
//         toggleActions: "play none none reverse",
//     }
//  });

// t2.from(
//     ".footer-container",
//     {
//     duration: 1.3, 
//     y: 400,
//     opacity: 0,
//     ease: "power4.inOut",
//     pin: true
// }).from(
//     ".footer-heading",
//     {
//         duration: 0.5,
//         ease: "power4.out",
//         x: -1000,
//     },
//     ">"
// ).from(
//     ".footer-img",
//     {
//         y: 100,
//         opacity: 0,
//         ease: "power4.inOut",
//     }
// ).from(
//     ".footer-links div",
//     {
//         stagger: 0.1,
//         y: 100,
//         opacity: 0,
//         ease: "power4.inOut",
//     },
//     "<0.1"
// );

// ScrollTrigger.create({
    
// })



