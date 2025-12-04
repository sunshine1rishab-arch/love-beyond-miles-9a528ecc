import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const secrets = [
  {
    id: 1,
    title: "Secret #1",
    message: "Every night before I sleep. You are my last thought. And every morning when I wake up. You are my first.",
  },
  {
    id: 2,
    title: "Secret #2",
    message: "I save every message you send me. I read them again and again when I miss you. Which is always.",
  },
  {
    id: 3,
    title: "Secret #3",
    message: "Sometimes I just stare at your photos and smile like an idiot. You make me so incredibly happy.",
  },
  {
    id: 4,
    title: "Secret #4",
    message: "When you text me. My heart literally skips a beat. Even now. After all these months. Every single time.",
  },
  {
    id: 5,
    title: "Secret #5",
    message: "I dream about the day when distance will not separate us. When I can see you every day. Hold you every day.",
  },
  {
    id: 6,
    title: "Secret #6",
    message: "You are not just my girlfriend. You are my best friend. My soulmate. My everything. My whole world.",
  },
];

const SecretMessagesPage = () => {
  const [unlockedSecrets, setUnlockedSecrets] = useState<number[]>([]);

  const toggleSecret = (id: number) => {
    setUnlockedSecrets((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-dreamy-gradient relative overflow-hidden">
        {/* Floating stars */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={10 + Math.random() * 15} fill="currentColor" />
          </motion.div>
        ))}

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Just For You</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Secret Messages
            </h1>
            <p className="font-lora text-muted-foreground">
              Tap each card to unlock my hidden thoughts
            </p>
          </motion.div>

          <div className="grid gap-4">
            {secrets.map((secret, index) => (
              <motion.div
                key={secret.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => toggleSecret(secret.id)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left"
                >
                  <div
                    className={`glass-card rounded-2xl p-5 transition-all duration-500 ${
                      unlockedSecrets.includes(secret.id)
                        ? "bg-primary/10 border-primary/30 shadow-romantic"
                        : "hover:bg-card/90"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={
                          unlockedSecrets.includes(secret.id)
                            ? { rotate: [0, -10, 10, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          unlockedSecrets.includes(secret.id)
                            ? "bg-primary"
                            : "bg-secondary"
                        }`}
                      >
                        {unlockedSecrets.includes(secret.id) ? (
                          <Unlock className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Lock className="w-5 h-5 text-secondary-foreground" />
                        )}
                      </motion.div>
                      <span className="font-playfair text-lg font-medium text-foreground">
                        {secret.title}
                      </span>
                      {unlockedSecrets.includes(secret.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          <Heart className="w-5 h-5 text-primary fill-current" />
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence>
                      {unlockedSecrets.includes(secret.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="font-lora text-foreground leading-relaxed pl-13">
                            {secret.message}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!unlockedSecrets.includes(secret.id) && (
                      <p className="font-lora text-muted-foreground text-sm pl-13">
                        Tap to reveal this secret...
                      </p>
                    )}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8"
          >
            <p className="font-dancing text-xl text-muted-foreground mb-6">
              {unlockedSecrets.length === secrets.length
                ? "You have unlocked all my secrets!"
                : `${secrets.length - unlockedSecrets.length} secrets remaining...`}
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/second-movie"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Previous
              </Link>
              <Link
                to="/pickup-lines"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
              >
                Pickup Lines
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SecretMessagesPage;