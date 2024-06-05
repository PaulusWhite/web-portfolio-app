const setUnrollEffect = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".unrolling-el");

  elements.forEach((element: HTMLElement) => {
    const parentEl: HTMLElement = element.parentElement!;

    const originalElHeight: string = window.getComputedStyle(element).height;
    const originalParentElHeight: string = window.getComputedStyle(parentEl).height;

    parentEl.style.height = originalParentElHeight;

    element.style.height = "0";
    element.style.opacity = "1";

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        element.style.height = originalElHeight;
        observer.unobserve(parentEl);

        setTimeout(() => {
          element.classList.remove("unrolling-el");
          element.removeAttribute("style");
        }, 2500);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    observer.observe(parentEl);
  });
};

export default setUnrollEffect;
