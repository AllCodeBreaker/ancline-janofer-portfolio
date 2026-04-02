import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="text-center z-10 px-4">
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-purple-400">Ancline Janofer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          Graphic Designer • 3D Artist • Visual Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="mt-8 px-8 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-full gap-2 mx-auto">
            <a href="#portfolio" className="flex items-center">
            
            View Work <FaArrowRight />

          </a> </button>
        </motion.div>

      </div>
    </section>
  );
}