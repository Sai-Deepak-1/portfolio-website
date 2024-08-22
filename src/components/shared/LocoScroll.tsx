"use client";

import React, { useEffect } from "react";

function LocoScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return <>{children}</>;
}

export default LocoScroll;