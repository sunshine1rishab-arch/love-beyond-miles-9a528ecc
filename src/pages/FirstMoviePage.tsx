import { motion } from "framer-motion";
import { Film, Calendar, Hand, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const FirstMoviePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-blush-gradient">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center shadow-glow"
          >
            <Film className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Our First Movie</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Devara
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="font-lora">9th October 2024</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-3xl p-6 md:p-8 shadow-romantic mb-6"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <p>
                Our first movie together! Even though our friends were there too. It was still so special. Sitting next to you in the dark theater. My heart racing with every passing moment.
              </p>
              <p>
                And then it happened. In the darkness of the cinema hall. I reached for your hand. And you held mine back.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-primary/10 rounded-3xl p-6 mb-6 border border-primary/20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Hand className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-primary fill-current" />
              </motion.div>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Hand className="w-8 h-8 text-primary transform scale-x-[-1]" />
              </motion.div>
            </div>
            <p className="font-dancing text-xl text-center text-foreground">
              The first time our hands intertwined
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass-card rounded-3xl p-6 shadow-soft mb-8"
          >
            <p className="font-lora text-foreground leading-relaxed">
              I remember how warm your hand felt. How perfectly it fit in mine. Like two puzzle pieces finally coming together. That touch. That simple gesture. It meant the entire world to me. It still does.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="glass-card rounded-2xl p-5 text-center mb-8"
          >
            <p className="font-dancing text-xl text-foreground italic">
              "Your hand in mine is my favorite feeling in this universe."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/the-beginning"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Previous
            </Link>
            <Link
              to="/best-day"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              The Best Day
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FirstMoviePage;