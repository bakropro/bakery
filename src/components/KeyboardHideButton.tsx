export function KeyboardHideButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        right: 16,
        bottom: 80,
        width: 64,
        height: 64,
        borderRadius: "50%",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Стрелка вниз */}
        <line x1="12" y1="6" x2="12" y2="18" />
        <polyline points="6,12 12,18 18,12" />
      </svg>
    </button>
  );
}