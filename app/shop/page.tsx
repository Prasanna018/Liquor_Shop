"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Highland Park 18",
      category: "Whisky",
      price: "$299.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Dom Pérignon 2010",
      category: "Champagne",
      price: "$249.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    // Add more products...
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
          Our Collection
        </motion.h1>
        
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-[300px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold">{product.price}</p>
                    <div className="flex">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}