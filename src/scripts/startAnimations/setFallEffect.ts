const setFallEffect = (element: HTMLElement) => {
  element.classList.add("fallInit");

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      entry.target.classList.add("showNode");
      observer.unobserve(element);

      setTimeout(() => {
        element.classList.remove("fallInit");
        entry.target.classList.remove("showNode");
      }, 1000);
    }
  };

  const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

  observer.observe(element);
};

export default setFallEffect;
