import { motion } from 'framer-motion';

const PaintDrip = () => {
  return (
    <div className="relative w-full overflow-hidden -mb-1">
      <motion.svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0,0 L0,60 Q360,100 720,60 T1440,60 L1440,0 Z"
          fill="hsl(var(--periwinkle))"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Paint drips */}
        <motion.path
          d="M240,60 Q240,80 240,100 Q240,110 245,110 Q250,110 250,100 L250,60"
          fill="hsl(var(--periwinkle))"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        
        <motion.path
          d="M480,60 Q480,75 480,90 Q480,100 485,100 Q490,100 490,90 L490,60"
          fill="hsl(var(--periwinkle))"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        
        <motion.path
          d="M960,60 Q960,85 960,105 Q960,115 965,115 Q970,115 970,105 L970,60"
          fill="hsl(var(--periwinkle))"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        
        <motion.path
          d="M1200,60 Q1200,78 1200,95 Q1200,105 1205,105 Q1210,105 1210,95 L1210,60"
          fill="hsl(var(--periwinkle))"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.svg>
    </div>
  );
};

export default PaintDrip;
