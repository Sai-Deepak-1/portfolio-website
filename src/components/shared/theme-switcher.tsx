import React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };
  const isChecked = (value: string) => theme === value;

  return (
    <div className="sticky flex w-24 h-9 items-center justify-center rounded-full border border-border bg-secondary p-1 dark:border-border dark:bg-black">
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
            className={`flex  cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out ${
              isChecked(id)
                ? "bg-primary text-primary-foreground"
                : "bg-transparent hover:bg-secondary-hover"
            }`}
            htmlFor={`theme-switcher-${id}`}
            aria-label={label}
            title={label}
          >
            <Icon className="h-4 w-4 transition-colors duration-200 ease-in-out" />
          </label>
        </span>
      ))}
    </div>
  );
};