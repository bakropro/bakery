import { useEffect, useState } from "react";

export function KeyboardHideButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // на мобильном показываем только при клавиатуре
        setVisible(document.body.classList.contains("keyboard-open"));
      } else {
        // на ПК всегда показываем для теста
        setVisible(true);
      }
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
        (document.activeElement as HTMLElement)?.blur(); // снимаем фокус
      }}
    >
      ⬇
    </button>
  );
}