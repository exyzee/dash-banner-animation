document.addEventListener("DOMContentLoaded", () => {
  // GSAP Timeline for the horizontal ad
  const horizontalTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  horizontalTl.from(".horizontal-ad .logo", { duration: 1.5, y: -50, opacity: 0, ease: "bounce.out" })
      .from(".horizontal-ad .tagline", { duration: 1.5, x: -100, opacity: 0, ease: "power3.out" }, "-=1.2")
      .from(".horizontal-ad .description", { duration: 1.5, x: -100, opacity: 0, ease: "power3.out" }, "-=1.2")
      .set(".horizontal-ad .features", { visibility: "visible" })
      .from(".horizontal-ad .features .feature", {
          duration: 1,
          x: -50,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.3
      }, "-=0.8")
      .from(".horizontal-ad .phone-mockup", { duration: 2, scale: 0.5, opacity: 0, ease: "back.out" }, "-=1.5")
      .from(".horizontal-ad .cta", { duration: 1.5, y: 50, opacity: 0, ease: "bounce.out" }, "-=1.5")
      .to(".horizontal-ad .cta", {
          scale: 1.1,
          duration: 1,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
      })
      .addPause(15);

  // GSAP Timeline for the vertical ad
  const verticalTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  verticalTl.from(".vertical-ad .logo", { duration: 1.5, y: -50, opacity: 0, ease: "bounce.out" })
      .from(".vertical-ad .tagline", { duration: 1.5, x: -100, opacity: 0, ease: "power3.out" }, "-=1.2")
      .from(".vertical-ad .description", { duration: 1.5, x: -100, opacity: 0, ease: "power3.out" }, "-=1.2")
      .set(".vertical-ad .features", { visibility: "visible" })
      .from(".vertical-ad .features .feature", {
          duration: 1,
          x: -50,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.3
      }, "-=0.8")
      .from(".vertical-ad .phone-mockup", { duration: 2, scale: 0.5, opacity: 0, ease: "back.out" }, "-=1.5")
      .from(".vertical-ad .cta", { duration: 1.5, y: 50, opacity: 0, ease: "bounce.out" }, "-=1.5")
      .to(".vertical-ad .cta", {
          scale: 1.1,
          duration: 1,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
      })
      .addPause(15);

  // Hover effect
  const features = document.querySelectorAll(".feature");
  features.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
      gsap.to(feature, { duration: 0.3, scale: 1.2, ease: "power3.out" });
    });
    feature.addEventListener("mouseleave", () => {
      gsap.to(feature, { duration: 0.3, scale: 1, ease: "power3.out" });
    });
  });

  // Beat effect for CTA button
  const ctas = document.querySelectorAll(".cta");
  ctas.forEach(cta => {
    gsap.to(cta, {
      scale: 1.1,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
});
