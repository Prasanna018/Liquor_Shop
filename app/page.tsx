"use client";

import { motion } from "framer-motion";
import { Wine, Beer, GlassWater, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const featuredProducts = [
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
    {
      id: 3,
      name: "Grey Goose",
      category: "Vodka",
      price: "$59.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1609344093364-7c0c14e66471?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Macallan 12",
      category: "Whisky",
      price: "$89.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1582819509237-d6c98bc31011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Hendrick's Gin",
      category: "Gin",
      price: "$39.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1614963326505-c857c454a166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Veuve Clicquot",
      category: "Champagne",
      price: "$69.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1592873846058-20cc8d443acc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeIn}
          >
            Premium Spirits & Wine
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover our curated collection of the finest beverages from around the world
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Browse by Category
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Wine, title: "Wine", description: "Fine wines from renowned vineyards" },
              { icon: Beer, title: "Spirits", description: "Premium spirits and liquors" },
              { icon: GlassWater, title: "Champagne", description: "Luxury champagne selection" }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Featured Products
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-[300px] overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                    <p className="text-muted-foreground mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                      <div className="flex items-center">
                        {Array.from({ length: product.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}