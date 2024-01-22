const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const elements = [...document.querySelectorAll(".container_heading")]
elements.map(element => {
    element.onmouseover = event => {
      animateText(event.target);
    }
});
  
window.addEventListener('scroll', () => {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !element.isAnimated) {
      element.isAnimated = true;
      animateText(element,50);
    } else if (!isVisible) {
      element.isAnimated = false;
    }
  });
});

const animateText = (element, timer = 30) => {
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerText = element.innerText.split("")
      .map((letter, index) => {
        if (letter===" ") {
          return " ";
        }
        if (index < iterations) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= element.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, timer);
}
  
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