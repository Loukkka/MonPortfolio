import { motion } from 'motion/react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle with Glow */}
      <motion.circle
        cx="60"
        cy="60"
        r="55"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Hexagon Background */}
      <motion.path
        d="M60 10 L95 32.5 L95 77.5 L60 100 L25 77.5 L25 32.5 Z"
        fill="rgba(6, 182, 212, 0.05)"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Letter L */}
      <motion.path
        d="M35 35 L35 75 L55 75"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Letter P */}
      <motion.path
        d="M65 35 L65 75 M65 35 L80 35 C85 35 90 40 90 45 C90 50 85 55 80 55 L65 55"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Decorative Dots */}
      <motion.circle
        cx="60"
        cy="20"
        r="2"
        fill="#06B6D4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, delay: 2 }}
      />
      <motion.circle
        cx="100"
        cy="60"
        r="2"
        fill="#3B82F6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, delay: 2.2 }}
      />
      <motion.circle
        cx="60"
        cy="105"
        r="2"
        fill="#06B6D4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, delay: 2.4 }}
      />
      <motion.circle
        cx="15"
        cy="60"
        r="2"
        fill="#3B82F6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, delay: 2.6 }}
      />

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
