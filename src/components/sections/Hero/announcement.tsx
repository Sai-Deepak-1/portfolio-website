import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function Announcement() {
  return (
    <Link
      href="/contact"
      className="group inline-flex items-center rounded-lg border border-black/10 bg-transparent px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm sm:px-3 sm:text-sm md:px-4 md:py-2 dark:border-white/10 dark:text-neutral-200"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center justify-center">
        <div className="relative z-10 mb-0.5">
          <div className="absolute mt-0.5 mr-2 flex h-2 w-2 items-center justify-center rounded-full bg-green sm:h-3 sm:w-3 md:h-4 md:w-4"></div>
          <div className="mt-0.5 mr-2 h-2 w-2 animate-ping rounded-full bg-green sm:h-3 sm:w-3 md:h-4 md:w-4"></div>
        </div>
      </div>
      <Separator className="mx-2 h-4 bg-neutral-900 dark:bg-neutral-200" orientation="vertical" />
      <span className="text-xs sm:text-sm md:text-base">Open for Freelancing Work</span>
      <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 dark:text-neutral-200" />
    </Link>
  );
}
