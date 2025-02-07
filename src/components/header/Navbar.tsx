import { navLinks } from "../../constants/navLinks";

function Navbar() {
  return (
    <nav
      className={`hidden lg:flex flex-row gap-6 justify-center items-center`}
    >
      {navLinks.map((item) => (
        <a
          key={item.id}
          className="hover:text-[var(--terciary)] text-lg last:border-2 last:border-[var(--secondary)] last:px-3 last:py-1 last:rounded-xl last:hover:bg-[var(--secondary)] last:hover:text-[var(--primary)] last:font-bold"
          href={`${item.path}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
