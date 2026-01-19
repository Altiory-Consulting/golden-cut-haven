import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, cloneElement, isValidElement } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  // IMPORTANT: when AnimatePresence keeps the previous screen during exit,
  // <Routes /> would normally re-render using the *new* location from context,
  // causing the new page to appear twice (once in the exiting tree, once in the entering tree).
  // Passing an explicit location “freezes” the previous screen correctly.
  const childrenWithFrozenLocation = isValidElement(children)
    ? cloneElement(children as any, { location })
    : children;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      >
        {childrenWithFrozenLocation}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
