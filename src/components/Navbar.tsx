import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { labels, navItems, org } from "../data/content";
import { useTheme } from "../lib/theme";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "whitespace-nowrap rounded-xl px-2.5 py-1.5 text-[15px] transition-colors",
    isActive
      ? "bg-kumkum/12 text-kumkum-deep dark:bg-kumkum/20 dark:text-[#f0c9a8]"
      : "text-ink-soft hover:text-ink dark:text-[#c9c2b4] dark:hover:text-[#f3efe6]",
  ].join(" ");

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/90 backdrop-blur-md dark:border-white/8 dark:bg-night/90">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-night text-[13px] font-semibold tracking-wide text-[#f3efe6] dark:bg-night-3">
            <span className="font-latin">{org.shortName}</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-semibold leading-tight text-ink dark:text-[#f3efe6]">
              {org.nameTe}
            </span>
            <span className="block text-[13px] text-ink-soft dark:text-[#b8b0a2]">{org.placeTe}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 text-ink dark:border-white/12 dark:text-[#f3efe6]"
            aria-label={theme === "dark" ? labels.themeLight : labels.themeDark}
          >
            {theme === "dark" ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-xl bg-kumkum px-4 py-2 text-[15px] font-medium text-white hover:bg-kumkum-deep active:scale-[0.98] md:inline-flex"
          >
            {labels.contact}
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 text-ink xl:hidden dark:border-white/12 dark:text-[#f3efe6]"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="మెను"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/8 px-4 py-3 xl:hidden dark:border-white/8">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
              {labels.contact}
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
