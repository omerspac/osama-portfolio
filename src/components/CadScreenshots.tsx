"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CadScreenshots() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: "/images/cad-ss/cad-ss1.jpg" },
    { src: "/images/cad-ss/cad-ss2.jpg" },
    { src: "/images/cad-ss/cad-ss3.jpg" },
    { src: "/images/cad-ss/cad-ss4.jpg" },
    { src: "/images/cad-ss/cad-ss5.jpg" },
    { src: "/images/cad-ss/cad-ss6.jpg" },
  ];

  return (
    <section id="cad-ss" className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">2D CAD Screenshots</h2>
        <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
          A selection of 2D CAD screenshots and machining-ready views — used for
          fabrication drawings, DXF exports and manufacturing documentation.
        </p>

        {/* IMAGES GRID */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow group cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={slide.src}
                alt={`CAD screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaRegEye className="text-4xl mb-2" />
                <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
        />
      </div>
    </section>
  );
}
