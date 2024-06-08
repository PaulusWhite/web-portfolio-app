interface IEffectActionProps {
  entry: IntersectionObserverEntry;
  observer: IntersectionObserver;
  element: Element;
}

interface IStartAnimationProps {
  elements: NodeListOf<Element>;
  triggerEl?: Element;
  effectAction: (props: IEffectActionProps) => void;
}

const startAnimation = (props: IStartAnimationProps) => {
  const { elements, triggerEl, effectAction } = props;

  elements.forEach((element: Element) => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) effectAction({ entry, element, observer });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    observer.observe(triggerEl ? triggerEl : element);
  });
};

export default startAnimation;
export type { IEffectActionProps };
