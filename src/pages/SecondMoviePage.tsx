import { motion } from "framer-motion";
import { Film, Calendar, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const SecondMoviePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-blush-gradient relative">
        {/* Animated hearts background */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={20 + i * 8} fill="currentColor" />
          </motion.div>
        ))}

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-burgundy flex items-center justify-center shadow-glow"
          >
            <Film className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Second Movie Date</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Singham Returns
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="font-lora">7th November 2024</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-3xl p-6 md:p-8 shadow-romantic mb-6"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Just three days after the best day of my life. And life decided to give me another perfect memory. Another movie. Another chance to be close to you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Again with our friends. But somehow it felt like we were the only two people in that theater.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-gradient-to-br from-burgundy/20 to-primary/20 rounded-3xl p-6 mb-6 border border-burgundy/30"
          >
            <div className="text-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-playfair text-lg font-semibold text-foreground">
                  The Entire Movie
                </span>
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
            <p className="font-lora text-center text-foreground mb-4">
              We held hands almost the entire time. Your fingers intertwined with mine. Like they belonged there forever.
            </p>
            <div className="flex justify-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                >
                  <Heart className="w-4 h-4 text-primary fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="glass-card rounded-3xl p-6 shadow-soft mb-6"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <p>
                And then. The most beautiful thing happened. You leaned your head on my shoulder. And in that moment. I forgot about the movie. I forgot about everything else in the world.
              </p>
              <motion.p
                className="text-primary font-medium text-center"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Best. Day. Ever.
              </motion.p>
              <p>
                All I could feel was you. Your warmth. Your presence. The gentle weight of your head on my shoulder. And I wished that moment would never end.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="glass-card rounded-2xl p-5 text-center mb-8"
          >
            <p className="font-dancing text-xl text-foreground italic">
              "Heaven is not a place. It is a person leaning on your shoulder."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/best-day"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Previous
            </Link>
            <Link
              to="/secrets"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              Secret Messages
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SecondMoviePage;