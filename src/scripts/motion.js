import { animate, stagger } from "motion";

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // If reduced motion is requested, immediately trigger all reveals and marks without animation
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("in");
      // Force children opacity/transform reset
      const children = el.querySelectorAll(':scope > *');
      children.forEach(c => {
        c.style.opacity = "1";
        c.style.transform = "none";
      });
    });
    document.querySelectorAll(".mark").forEach((el) => el.classList.add("in"));
    
    // Set hero elements to fully visible immediately
    const heroElements = [
      document.querySelector(".hello[data-animate]"),
      ...Array.from(document.querySelectorAll(".hero-line")),
      document.querySelector(".lede[data-animate]"),
      document.querySelector(".links[data-animate]"),
      document.querySelector(".hero-portrait[data-animate]")
    ].filter(Boolean);
    
    heroElements.forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // 1. HERO LOAD-IN STAGGERED ANIMATION
  const helloEl = document.querySelector(".hello[data-animate]");
  const heroLines = document.querySelectorAll(".hero-line");
  const ledeEl = document.querySelector(".lede[data-animate]");
  const linksEl = document.querySelector(".links[data-animate]");
  const portraitEl = document.querySelector(".hero-portrait[data-animate]");

  const heroTargets = [];
  if (helloEl) heroTargets.push(helloEl);
  if (heroLines.length > 0) heroTargets.push(...Array.from(heroLines));
  if (ledeEl) heroTargets.push(ledeEl);
  if (linksEl) heroTargets.push(linksEl);
  if (portraitEl) heroTargets.push(portraitEl);

  if (heroTargets.length > 0) {
    // Initial hidden state for clean load-in
    heroTargets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(15px)";
    });

    // Run staggered fade-up animation
    animate(
      heroTargets,
      { opacity: [0, 1], y: [15, 0] },
      {
        delay: stagger(0.08),
        duration: 0.45,
        easing: [0.16, 1, 0.3, 1], // gentle ease-out
      }
    );
  }

  // 2. SCROLL REVEALS (IntersectionObserver + Motion One stagger)
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("in");

          // Find direct children to stagger
          const children = el.querySelectorAll(":scope > *");
          if (children.length > 0) {
            // Set initial state for reveal stagger
            children.forEach((child) => {
              // Only apply to elements that don't have override styles already set
              if (!child.style.opacity) {
                child.style.opacity = "0";
                child.style.transform = "translateY(18px)";
              }
            });

            animate(
              Array.from(children),
              { opacity: [0, 1], y: [18, 0] },
              {
                delay: stagger(0.08),
                duration: 0.7,
                easing: [0.16, 1, 0.3, 1],
              }
            );
          } else {
            animate(
              el,
              { opacity: [0, 1], y: [18, 0] },
              {
                duration: 0.7,
                easing: [0.16, 1, 0.3, 1],
              }
            );
          }

          revealObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // 3. WAVY UNDERLINE OBSERVER (.mark phrases drawing in when entering viewport)
  const markObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          markObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  document.querySelectorAll(".mark").forEach((el) => {
    markObserver.observe(el);
  });
});
