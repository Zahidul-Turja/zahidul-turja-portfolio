import Link from "next/link";

function ButtonSecondary({ children, styles, isActive, type, href, onClick }) {
  const baseClassNames = `group relative overflow-hidden rounded px-3 py-1 font-semibold text-primary-50 ${styles}`;
  const spanClassNames = `absolute inset-0 z-0 h-full rounded bg-secondary-800 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
    isActive ? "translate-y-7" : "translate-y-12"
  }`;

  if (type === "link" && href) {
    return (
      <Link href={href} className={baseClassNames}>
        <span className={spanClassNames} />
        <span className="relative">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={baseClassNames} onClick={onClick}>
      <span className={spanClassNames} />
      <span className="relative">{children}</span>
    </button>
  );
}

export default ButtonSecondary;
