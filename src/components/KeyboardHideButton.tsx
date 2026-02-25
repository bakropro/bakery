import { useEffect, useState } from "react";

export function KeyboardHideButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      setVisible(document.body.classList.contains("keyboard-open"));
    }

    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);

    // проверяем сразу
    update();

    return () => {
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      className="keyboard-hide-button"
      onClick={() => {
        // снимаем фокус со всех input
        (document.activeElement as HTMLElement)?.blur();
      }}
    >
      ⬇
    </button>
  );
}