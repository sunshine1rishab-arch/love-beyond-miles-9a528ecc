import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, PenLine, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const letterContent = `My Dearest Love.

As I write this letter. My heart is overflowing with emotions that words can barely capture. Fifteen months. That is how long I have had the privilege of calling you mine. And every single day has been a blessing I never knew I needed.

When I first saw you. Something inside me knew. It just knew that you were special. That you were different. That you were the one I had been waiting for my entire life. And when you said yes on that beautiful September morning. My world changed forever.

I still remember the first time I held your hand. The electricity that ran through my veins. The way my heart beat so fast I thought it would burst. That moment in the movie theater. In the darkness. When our fingers intertwined. It was magical.

And then came November 4th. The best day of my entire existence. When I finally held you in my arms. When I felt your warmth against me. When I kissed your cheek for the first time. I knew right then. I knew that I would never let you go. That I would fight for us. For this love. For our future.

Distance is hard. I will not lie. There are nights when I miss you so much it physically hurts. When all I want is to hold you. To see your smile. To hear your laugh. But you know what? This distance has only made our love stronger. It has taught me that what we have is real. That it is worth fighting for. That you are worth every second of waiting.

I think about our future every single day. The day when we will not have to say goodbye. When I can wake up and see your face. When I can hold your hand whenever I want. When I can kiss you goodnight every night. That day will come. And until then. I will cherish every message. Every call. Every moment we steal together.

You are not just my girlfriend. You are my best friend. My confidant. My safe place. My home. With you I am the best version of myself. You make me want to be better. To do better. To love better.

Thank you for choosing me. Thank you for staying. Thank you for loving me through the distance and the difficult days. Thank you for being patient with me. Thank you for being you.

I love you more than words could ever express. More than any poetry could capture. More than any song could sing. My love for you is infinite. Eternal. Unshakeable.

Here is to fifteen months of us. And here is to forever more.

I love you. Today. Tomorrow. Always.

Forever Yours.`;

const LoveLetterPage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showSkip, setShowSkip] = useState(true);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText(letterContent);
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      if (index < letterContent.length) {
        setDisplayedText(letterContent.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        setShowSkip(false);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isTyping]);

  const skipTyping = () => {
    setIsTyping(false);
    setDisplayedText(letterContent);
    setShowSkip(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-blush-gradient relative overflow-hidden">
        {/* Floating hearts */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart size={20 + Math.random() * 30} fill="currentColor" />
          </motion.div>
        ))}

        <div className="container max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <PenLine className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="font-dancing text-2xl text-primary mb-2">From My Heart To Yours</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-3">
              A Love Letter
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span className="font-lora text-sm">15 Months Anniversary Special</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="bg-cream rounded-3xl p-6 md:p-10 shadow-romantic border border-primary/10">
              {/* Paper texture effect */}
              <div className="absolute inset-0 opacity-5 pointer-events-none rounded-3xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] " />

              <div className="relative">
                <pre className="font-lora text-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-0.5 h-5 bg-primary ml-1"
                    />
                  )}
                </pre>
              </div>

              {/* Decorative line */}
              <div className="mt-8 flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-primary fill-current" />
                </motion.div>
              </div>
            </div>

            {showSkip && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={skipTyping}
                className="absolute top-4 right-4 px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full font-lora text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Skip Animation
              </motion.button>
            )}
          </motion.div>

          {!isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <div className="glass-card rounded-2xl p-6 text-center mb-8">
                <p className="font-dancing text-xl text-foreground">
                  Thank you for being the best part of my life.
                </p>
                <p className="font-playfair text-2xl text-primary mt-2">
                  I Love You!
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: i * 0.1 
                      }}
                    >
                      <Heart className="w-5 h-5 text-primary fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Link
                  to="/pickup-lines"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Previous
                </Link>
                <Link
                  to="/"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-lora shadow-romantic hover:shadow-glow transition-all duration-300"
                >
                  Back to Start
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default LoveLetterPage;