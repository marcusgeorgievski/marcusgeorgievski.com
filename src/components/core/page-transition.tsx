"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: 7,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
