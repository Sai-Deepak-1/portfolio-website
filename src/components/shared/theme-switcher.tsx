"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };
  const isChecked = (value: string) => theme === value;

  return (
    <div className="flex w-24 h-9 items-center justify-center rounded-full border border-border bg-secondary p-1 dark:border-border dark:bg-black">
      {[
        { id: "system", Icon: Monitor, label: "Switch to system mode" },
        { id: "dark", Icon: Moon, label: "Switch to dark mode" },
        { id: "light", Icon: Sun, label: "Switch to light mode" },
      ].map(({ id, Icon, label }) => (
        <span key={id} className="relative h-full flex-1 flex items-center justify-center">
          <input
            className="peer absolute m-0 appearance-none p-0 outline-none"
            type="radio"
            id={`theme-switcher-${id}`}
            value={id}
            onChange={handleChange}
            checked={isChecked(id)}
          />
          <label
            className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out ${
              isChecked(id)
                ? "bg-primary shadow-md dark:bg-primary"
                : "bg-transparent hover:bg-secondary dark:hover:bg-secondary"
            }`}
            htmlFor={`theme-switcher-${id}`}
            aria-label={label}
            title={label}
          >
            <Icon
              className={`h-4 w-4 transition-colors duration-200 ease-in-out ${
                isChecked(id)
                  ? "text-gray-500 hover:text-white dark:hover:text-black"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            />
          </label>
        </span>
      ))}
    </div>
  );
};
