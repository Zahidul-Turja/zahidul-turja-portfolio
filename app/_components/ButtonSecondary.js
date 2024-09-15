function ButtonSecondary({ children, styles, isActive }) {
  return (
    <button
      className={`group relative overflow-hidden rounded px-3 py-1 text-primary-50 ${styles} `}
    >
      <span
        className={`absolute inset-0 z-0 h-full rounded bg-secondary-800 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-7" : "translate-y-12"}`}
      />
      <span className="relative">{children}</span>
    </button>
  );
}

export default ButtonSecondary;
