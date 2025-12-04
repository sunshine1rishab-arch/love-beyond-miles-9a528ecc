import { motion } from "framer-motion";
import { Heart, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Sparkles from "@/components/Sparkles";

const TheBeginningPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-dreamy-gradient relative overflow-hidden">
        <Sparkles count={10} />

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center shadow-glow"
          >
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Where It All Started</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Day I Proposed
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-lora">16th September 2024</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-lora">10:32 AM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="glass-card rounded-3xl p-6 md:p-8 shadow-romantic mb-8"
          >
            <div className="space-y-4 font-lora text-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                My heart was pounding so fast that day. I had been gathering courage for what felt like forever. Every time I saw you. Every time we talked. I knew you were special.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                At exactly 10:32 in the morning. I finally asked you the question that changed my life. "Will you be mine?"
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                And when you said yes. The entire world stopped. Colors became brighter. Music became sweeter. Everything felt right for the first time.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-primary font-medium"
              >
                That moment. That exact second. My life found its purpose. You became my reason to smile. My reason to dream. My everything.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="glass-card rounded-2xl p-6 text-center mb-8"
          >
            <p className="font-dancing text-xl text-foreground italic mb-2">
              "You are the answer to every prayer I ever said."
            </p>
            <div className="flex justify-center">
              <Heart className="w-5 h-5 text-primary fill-current animate-heart-beat" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/timeline"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Back to Timeline
            </Link>
            <Link
              to="/first-movie"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
            >
              Next Memory
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TheBeginningPage;