const setAscentEffect = (elementsArr: Element[]) => {
  elementsArr.forEach((element: Element) => {
    element.classList.add("ascentInit"); // is not a module css

    const ascentEffectAction = () => {
      const elementPosition: number = element.getBoundingClientRect().y;

      if (elementPosition > 0 && window.innerHeight > elementPosition) {
        setTimeout(() => {
          element.classList.add("showNode");

          setTimeout(() => {
            element.classList.remove("ascentInit");
            element.classList.remove("showNode");
          }, 1000);
        }, 500);

        window.removeEventListener("scroll", ascentEffectAction);
      }
    };

    window.addEventListener("scroll", ascentEffectAction);

    ascentEffectAction(); //init
  });
};

export default setAscentEffect;
