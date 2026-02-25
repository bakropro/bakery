type Props = {
  onClick?: () => void;
};

export function KeyboardHideButton({ onClick }: Props) {
  function handleClick() {
    // снимаем фокус с активного поля
    const active = document.activeElement as HTMLElement;
    active?.blur();
    onClick?.();
  }

  return (
    <button
      className="keyboard-hide-button"
      onClick={handleClick}
      aria-label="Скрыть клавиатуру"
    >
      ⬇
    </button>
  );
}