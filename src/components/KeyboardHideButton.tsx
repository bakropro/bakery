import { useEffect, useState } from "react";

export function KeyboardHideButton({ forceShowOnDesktop = false }: { forceShowOnDesktop?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const isKeyboardOpen = document.body.classList.contains("keyboard-open");
      const isDesktop = window.innerWidth > 768;

      if (isKeyboardOpen || (forceShowOnDesktop && isDesktop)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);

    // проверка сразу
    update();

    return () => {
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, [forceShowOnDesktop]);

  if (!visible) return null;

  return (
    <button
      className="keyboard-hide-button"
      onClick={() => (document.activeElement as HTMLElement)?.blur()}
    >
      ⬇
    </button>
  );
}