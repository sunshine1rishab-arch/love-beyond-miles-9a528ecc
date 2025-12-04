import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RefreshCw, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const pickupLines = [
  "Are you a magician? Because whenever I look at you everyone else disappears.",
  "Do you have a map? Because I just got lost in your eyes.",
  "Is your name Google? Because you have everything I have been searching for.",
  "Are you a camera? Because every time I look at you I smile.",
  "If beauty were time you would be an eternity.",
  "Do you believe in love at first sight or should I walk by again?",
  "Are you a parking ticket? Because you have fine written all over you.",
  "Is your dad a boxer? Because you are a knockout!",
  "Did it hurt when you fell from heaven?",
  "You must be tired because you have been running through my mind all day.",
  "If I could rearrange the alphabet I would put U and I together.",
  "Are you a bank loan? Because you have my interest.",
  "Do you have a sunburn or are you always this hot?",
  "Is there an airport nearby or is that just my heart taking off?",
  "You are so sweet you are giving me a toothache.",
  "If you were a vegetable you would be a cute cumber.",
  "Are you made of copper and tellurium? Because you are Cu Te!",
  "I must be a snowflake because I have fallen for you.",
];

const PickupLinesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextLine = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % pickupLines.length);
      setIsAnimating(false);
    }, 300);
  };

  const animations = [
    { scale: [0.8, 1.1, 1], rotate: [0, 5, -5, 0] },
    { y: [-50, 10, 0], opacity: [0, 1, 1] },
    { x: [-100, 20, 0], rotate: [-10, 5, 0] },
    { scale: [0, 1.2, 1], rotate: [180, 0] },
  ];

  const currentAnimation = animations[currentIndex % animations.length];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-blush-gradient relative overflow-hidden">
        {/* Animated background elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={15 + Math.random() * 20} fill="currentColor" />
            ) : (
              <Star size={10 + Math.random() * 15} fill="currentColor" />
            )}
          </motion.div>
        ))}

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Cheesy But Sweet</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Pickup Lines For You
            </h1>
            <p className="font-lora text-muted-foreground">
              Because you deserve all the cheesy love
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-romantic min-h-[200px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, ...Object.fromEntries(
                    Object.entries(currentAnimation).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])
                  )}}
                  animate={{ opacity: 1, ...Object.fromEntries(
                    Object.entries(currentAnimation).map(([k, v]) => [k, Array.isArray(v) ? v[v.length - 1] : v])
                  )}}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mb-4"
                  >
                    <Heart className="w-8 h-8 mx-auto text-primary fill-current" />
                  </motion.div>
                  <p className="font-playfair text-xl md:text-2xl text-foreground leading-relaxed">
                    "{pickupLines[currentIndex]}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
            </div>

            <div className="flex justify-center mt-6">
              <motion.button
                onClick={nextLine}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                <RefreshCw className={`w-5 h-5 ${isAnimating ? "animate-spin" : ""}`} />
                Next Pickup Line
              </motion.button>
            </div>

            <p className="text-center font-lora text-sm text-muted-foreground mt-4">
              {currentIndex + 1} of {pickupLines.length}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card rounded-2xl p-5 text-center mt-8 mb-8"
          >
            <p className="font-dancing text-xl text-foreground italic">
              "I do not need pickup lines for you. Because you have already captured my heart."
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                >
                  <Heart className="w-4 h-4 text-primary fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/secrets"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Previous
            </Link>
            <Link
              to="/love-letter"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              My Love Letter
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PickupLinesPage;