type DeleteButtonProps = {
  onClick: () => void;
};

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        padding: 4,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: 18,
        color: "#888",
      }}
    >
      ×
    </button>
  );
}
