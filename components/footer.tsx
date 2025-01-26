"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Wine } from "lucide-react";
import { useRouter } from "next/navigation";

export function Footer() {
  const router = useRouter();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" }
  ];

  const categories = [
    { name: "Wine", path: "/categories" },
    { name: "Spirits", path: "/categories" },
    { name: "Champagne", path: "/categories" },
    { name: "Whiskey", path: "/categories" }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <motion.footer 
      className="bg-card text-card-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div {...fadeIn} className="space-y-4">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <Wine className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">Premium Spirits</span>
            </div>
            <p className="text-muted-foreground">
              Discover the finest collection of premium spirits and wines from around the world.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    onClick={() => handleNavigation(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    onClick={() => handleNavigation(category.path)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          {...fadeIn}
          className="mt-8 pt-8 border-t text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Premium Spirits. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}