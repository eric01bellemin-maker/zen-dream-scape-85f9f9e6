import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
// On définit les sons avec le chemin correct pour GitHub Pages (/zen-dream-scape/)
const sounds = [
  { 
    image: "/zen-dream-scape/oiseaux.jpg", 
    title: "Chant d'oiseaux", 
    desc: "Mélodies douces au lever du jour", 
    audio: "/zen-dream-scape/sounds/birds.mp3" 
  },
  { 
    image: "/zen-dream-scape/riviere.jpg", 
    title: "Rivière apaisante", 
    desc: "Le murmure continu de l'eau vive", 
    audio: "/zen-dream-scape/sounds/river.mp3" 
  },
  { 
    image: "/zen-dream-scape/vagues.jpg", 
    title: "Douceur des vagues", 
    desc: "Le ressac hypnotique de l'océan", 
    audio: "/zen-dream-scape/sounds/waves.mp3" 
  },
  { 
    image: "/zen-dream-scape/vent.jpg", 
    title: "Souffle du vent", 
    desc: "La brise légère à travers les arbres", 
    audio: "/zen-dream-scape/sounds/wind.mp3" 
  },
];
