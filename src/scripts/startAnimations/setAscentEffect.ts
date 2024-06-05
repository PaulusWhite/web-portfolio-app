const setAscentEffect = () => {
  const elements: NodeListOf<Element> = document.querySelectorAll(".ascentInit");

  elements.forEach((element: Element) => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("showNode");
        observer.unobserve(element);

        setTimeout(() => {
          element.classList.remove("ascentInit");
          entry.target.classList.remove("showNode");
        }, 1100);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    observer.observe(element);
  });
};

export default setAscentEffect;
