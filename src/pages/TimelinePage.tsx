import { motion } from "framer-motion";
import { Heart, Calendar, Film, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const timelineEvents = [
  {
    date: "16th September 2024",
    time: "10:32 AM",
    title: "The Day It All Began",
    description: "The moment I asked you to be mine. My heart was racing but I knew you were the one.",
    icon: Heart,
    link: "/the-beginning",
    color: "bg-primary",
  },
  {
    date: "9th October 2024",
    time: "",
    title: "First Movie Together",
    description: "Devara. Our first movie date. The day I held your hand for the very first time.",
    icon: Film,
    link: "/first-movie",
    color: "bg-accent",
  },
  {
    date: "4th November 2024",
    time: "6:34 PM",
    title: "The Best Day Ever",
    description: "Our first hug. Our first cheek kiss. The day that changed everything forever.",
    icon: Sparkles,
    link: "/best-day",
    color: "bg-rose-gold",
  },
  {
    date: "7th November 2024",
    time: "",
    title: "Second Movie Magic",
    description: "Singham Returns. You leaned on my shoulder. I held your hand the entire time. Pure bliss.",
    icon: Film,
    link: "/second-movie",
    color: "bg-burgundy",
  },
];

const TimelinePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12 px-4 bg-blush-gradient">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-dancing text-2xl text-primary mb-2">Our Beautiful Journey</p>
            <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Moments We Cherish
            </h1>
            <p className="font-lora text-muted-foreground">
              Every second with you is a memory I treasure
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Link to={event.link} className="block group">
                    <div className="flex gap-4">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center shadow-romantic z-10 relative`}
                        >
                          <event.icon className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex-1 glass-card rounded-2xl p-5 shadow-soft group-hover:shadow-romantic transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-lora text-sm text-primary font-medium">
                            {event.date}
                            {event.time && ` at ${event.time}`}
                          </span>
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="font-lora text-muted-foreground text-sm leading-relaxed">
                          {event.description}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-primary text-sm font-lora opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Read more</span>
                          <Heart className="w-3 h-3 fill-current" />
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <Link
              to="/secrets"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-lora hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              Discover Secret Messages
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TimelinePage;