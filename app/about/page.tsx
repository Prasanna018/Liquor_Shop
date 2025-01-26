"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wine, Award, Users, Globe } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>

          <motion.div 
            className="prose prose-lg dark:prose-invert mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Premium Spirits & Wine is your destination for the finest beverages from around the world. 
              We pride ourselves on curating an exceptional collection of spirits, wines, and champagnes 
              for the most discerning connoisseurs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Wine, title: "Premium Selection", description: "Carefully curated collection" },
              { icon: Award, title: "Expert Knowledge", description: "Professional guidance" },
              { icon: Users, title: "Customer Service", description: "Dedicated support team" },
              { icon: Globe, title: "Global Sourcing", description: "International partnerships" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}