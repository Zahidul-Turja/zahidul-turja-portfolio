"use client";

import { motion } from "framer-motion";

function Circles({ left, middle, right }) {
  return (
    <div className="mb-1 mr-6 mt-5 flex justify-end gap-3">
      <motion.div
        className={`h-3 w-3 rounded-full ${left} cursor-grab transition-all`}
        drag
        dragConstraints={{
          top: -2, // Reduce the draggable range vertically
          right: 2, // Reduce the draggable range horizontally
          bottom: 2,
          left: -2,
        }}
        dragTransition={{
          bounceDamping: 60, // Increase the damping for a stiffer feel
          bounceStiffness: 800, // Increase the stiffness to make the drag feel more rigid
        }}
      ></motion.div>
      <motion.div
        className={`h-3 w-3 rounded-full ${middle} cursor-grab transition-all`}
        drag
        dragConstraints={{
          top: -2, // Reduce the draggable range vertically
          right: 2, // Reduce the draggable range horizontally
          bottom: 2,
          left: -2,
        }}
        dragTransition={{
          bounceDamping: 60, // Increase the damping for a stiffer feel
          bounceStiffness: 800, // Increase the stiffness to make the drag feel more rigid
        }}
      ></motion.div>
      <motion.div
        className={`h-3 w-3 rounded-full ${right} cursor-grab transition-all`}
        drag
        dragConstraints={{
          top: -2, // Reduce the draggable range vertically
          right: 2, // Reduce the draggable range horizontally
          bottom: 2,
          left: -2,
        }}
        dragTransition={{
          bounceDamping: 60, // Increase the damping for a stiffer feel
          bounceStiffness: 800, // Increase the stiffness to make the drag feel more rigid
        }}
      ></motion.div>
    </div>
  );
}

export default Circles;
