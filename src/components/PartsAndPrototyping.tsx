"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PartsAndPrototyping() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: "/images/Picture38.jpg" },
    { src: "/images/Picture39.jpg" },
    { src: "/images/Picture37.jpg" },
    { src: "/images/Picture32.jpg" },
    { src: "/images/Picture33.jpg" },
    { src: "/images/Picture34.jpg" },
    { src: "/images/Picture35.jpg" },
    { src: "/images/Picture36.jpg" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-3xl font-bold">3D PARTS & PROTOTYPING</h2>
        <p className="mt-3 text-gray-600">
          Designed split-assembly parts for printing and manual assembly. Focus
          on tolerances, fixturing, and post-process finishing.
        </p>

        {/* IMAGES GRID */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg shadow group cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={slide.src}
                alt={`3D part ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <FaRegEye className="text-4xl mb-2 animate-fade-in" />
              <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX SLIDER */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
        />
      </div>

      {/* Inline Animation Styles */}
      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(-8px);
            opacity: 0.6;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-right {
          animation: slideRight 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}
