const flashlightEffect = (flashlight: HTMLDivElement) => {
  window.addEventListener("mousemove", (e: MouseEvent) => {
    flashlight.style.cssText = `left: ${e.pageX}px; top: ${e.pageY}px`;
  });
};

export default flashlightEffect;
