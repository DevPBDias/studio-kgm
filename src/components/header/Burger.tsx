"use client";
import { AlignCenter, X } from "lucide-react";
import { navLinks } from "../../constants/navLinks";
import { useNavContext } from "@/context/nav-provider";

function Burger() {
  const { callNav, setCallNav } = useNavContext();

  return (
    <>
      <div
        onClick={() => setCallNav(!callNav)}
        className="bg-transparent lg:hidden"
      >
        {!callNav ? (
          <AlignCenter size={24} color="#f8f1f8" />
        ) : (
          <X size={24} color="#f8f1f8" />
        )}
      </div>
      <nav
        className={`${
          callNav ? "flex" : "hidden"
        } flex-col absolute z-50 top-12 right-6 px-10 py-10 gap-4 bg-[#221824] rounded-md shadow-md shadow-slate-800
        `}
      >
        {navLinks.map((item) => (
          <a key={item.id} className="text-lg" href={`${item.path}`}>
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Burger;
