const setFallEffect = () => {
  const elements: NodeListOf<Element> = document.querySelectorAll(".fallInit");

  elements.forEach((element: Element) => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("showNode");
        observer.unobserve(element);

        setTimeout(() => {
          element.classList.remove("fallInit");
          entry.target.classList.remove("showNode");
        }, 2000);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    observer.observe(element);
  });
};

export default setFallEffect;
