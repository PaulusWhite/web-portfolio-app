const setUnrollEffect = (element: HTMLElement) => {
  const originalHeight: string = window.getComputedStyle(element).height;
  element.style.height = "1px";

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      const target: HTMLElement = entry.target as HTMLElement;
      target.style.height = originalHeight;
      observer.unobserve(element);
    }
  };

  const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

  observer.observe(element);
};

export default setUnrollEffect;
