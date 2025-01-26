"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wine, Beer, GlassWater } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Categories() {
  const categories = [
    {
      icon: Wine,
      title: "Wine",
      description: "Explore our collection of fine wines from renowned vineyards worldwide",
      items: ["Red Wine", "White Wine", "Rosé", "Sparkling Wine"]
    },
    {
      icon: Beer,
      title: "Spirits",
      description: "Discover premium spirits and liquors for every occasion",
      items: ["Whiskey", "Vodka", "Gin", "Rum"]
    },
    {
      icon: GlassWater,
      title: "Champagne",
      description: "Indulge in our luxury champagne selection",
      items: ["Brut", "Rosé", "Vintage", "Prestige Cuvée"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Categories
        </motion.h1>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6">
                  <category.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}