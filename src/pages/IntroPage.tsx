import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Sparkles from "@/components/Sparkles";

const IntroPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const startDate = new Date("2024-09-16T10:32:00");
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-blush-gradient">
        <Sparkles count={12} />

        <AnimatePresence>
          {!showContent && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart className="w-32 h-32 text-primary fill-primary animate-pulse-glow" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center z-10 max-w-lg mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <Heart className="w-16 h-16 mx-auto text-primary fill-primary animate-heart-beat" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-dancing text-2xl text-muted-foreground mb-2"
              >
                Happy 15 Months
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-4"
              >
                Our Love Story
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3 mb-8"
              >
                <p className="font-lora text-lg text-muted-foreground">
                  Every moment with you feels like magic
                </p>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="font-playfair text-2xl font-semibold">{days}</span>
                  <span className="font-lora">days of loving you</span>
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="glass-card rounded-2xl p-6 mb-8 shadow-romantic"
              >
                <p className="font-dancing text-xl text-foreground italic">
                  "Distance means so little when someone means so much."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Link
                  to="/timeline"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-lora text-lg shadow-romantic hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Begin Our Journey
                  <Heart className="w-5 h-5 fill-current" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-12"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
                </motion.div>
                <p className="font-lora text-sm text-muted-foreground mt-2">
                  Scroll to explore
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default IntroPage;