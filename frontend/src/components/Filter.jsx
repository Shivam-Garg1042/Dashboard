import { motion } from 'framer-motion';

export const FilterButton = ({ active, onClick, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 
        ${active 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-md' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};