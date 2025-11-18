"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-[5002] flex items-center justify-center w-11 h-11 rounded-lg border border-white bg-[var(--primary)] text-[var(--secondary)]"
      >
        {open ? (
          <X size={22} color="white" />
        ) : (
          <Menu size={22} color="white" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[5000] bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-[5001] w-[85vw] sm:w-[70vw] md:w-[60vw] bg-[var(--primary)] border-l border-white/10 p-6 flex flex-col gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="text-lg px-2 py-2 rounded-md hover:text-[var(--terciary)] focus:outline-none focus:ring-2 focus:ring-[var(--terciary)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
