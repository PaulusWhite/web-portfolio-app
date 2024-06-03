const setAscentEffect = (elementsArr: Element[]) => {
  elementsArr.forEach((element: Element) => {
    element.classList.add("ascentInit");

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

    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    observer.observe(element);
  });
};

export default setAscentEffect;
