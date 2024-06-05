const setUnrollEffect = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".unrolling-el");

  elements.forEach((element: HTMLElement) => {
    const parentEl: HTMLElement = element.parentElement!;

    const elOriginalHeight: string = window.getComputedStyle(element).height;
    const parentElOriginalHeight: string = window.getComputedStyle(parentEl).height;

    parentEl.style.height = parentElOriginalHeight;

    element.style.height = "0";
    element.style.opacity = "1";

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        element.style.height = elOriginalHeight;
        observer.unobserve(parentEl);

        setTimeout(() => {
          element.classList.remove("unrolling-el");
          element.removeAttribute("style");
          parentEl.removeAttribute("style");
        }, 2500);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });
    observer.observe(parentEl);
  });
};

export default setUnrollEffect;
