import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mitt from "mitt";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


type Events = {
  bannerVisibilityChange: "hidden" | "visible";
};

export const emitter = mitt<Events>();