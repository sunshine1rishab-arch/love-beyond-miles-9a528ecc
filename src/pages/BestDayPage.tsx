import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Clock, Calendar, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const BestDayPage = () => {
  const [showSpecial, setShowSpecial] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpecial(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-dreamy-gradient relative overflow-hidden">
        {/* Floating stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={12 + Math.random() * 16} fill="currentColor" />
          </motion.div>
        ))}

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-primary-foreground" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-dancing text-3xl text-primary mb-2"
            >
              The Best Day Of My Entire Life
            </motion.p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">
              4th November 2024
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-lora">6:34 PM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-3xl p-6 md:p-8 shadow-romantic mb-6"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                This day. This beautiful perfect day. I still feel butterflies when I think about it. My heart still skips a beat when I remember that moment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                At 6:34 in the evening. The world became the most magical place. Because for the first time ever. I held you in my arms.
              </motion.p>
            </div>
          </motion.div>

          <AnimatePresence>
            {showSpecial && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-6 mb-6 border border-primary/30"
              >
                <div className="text-center mb-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center gap-2 text-primary"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-playfair text-lg font-semibold">Our First Hug</span>
                    <Heart className="w-5 h-5 fill-current" />
                  </motion.div>
                </div>
                <p className="font-lora text-center text-foreground">
                  And that soft kiss on the cheek. Time stopped. My heart stopped. The entire universe paused just for us.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="glass-card rounded-3xl p-6 shadow-soft mb-6"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <p>
                Nothing will ever compare to that feeling. The warmth of your embrace. The softness of your cheek. The way my heart felt like it would explode with happiness.
              </p>
              <p className="text-primary font-medium">
                If I could live in one moment forever. It would be this one. Holding you. Feeling your heartbeat. Knowing that you are mine and I am yours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="glass-card rounded-2xl p-5 text-center mb-8"
          >
            <p className="font-dancing text-xl text-foreground italic">
              "That hug told you what words never could."
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Heart className="w-4 h-4 text-primary fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/first-movie"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Previous
            </Link>
            <Link
              to="/second-movie"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              Second Movie
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BestDayPage;