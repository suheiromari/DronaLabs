"use client"
import { motion } from 'framer-motion';

export default function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // Initial state: invisible and moved down
      animate={{ opacity: 1, y: 0 }}    // Animate to visible and move up to original position
      transition={{ duration: 1.5 }}    // Animation duration: 1.5 seconds
    >
      <h1>We Build Amazing Software Solutions</h1>
      <p>Empowering your business with cutting-edge technology.</p>
    </motion.div>
  );
}
 
