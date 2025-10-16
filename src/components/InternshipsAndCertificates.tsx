"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function InternshipsAndCertificates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [type, setType] = useState<"internship" | "certificate" | null>(null);

  const internships = [
    { src: "/images/certificates/internship1.jpg" },
    { src: "/images/certificates/internship2.jfif" },
    { src: "/images/certificates/internship3.jfif" },
    { src: "/images/certificates/internship4.jpg" },
  ];

  const certificates = [
    { src: "/images/certificates/cert1.png" },
    { src: "/images/certificates/cert2.png" },
    { src: "/images/certificates/cert3.png" },
    { src: "/images/certificates/cert4.jfif" },
  ];

  const slides = type === "internship" ? internships : certificates;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-3xl font-bold mb-8">INTERNSHIPS & CERTIFICATIONS</h2>
        <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
          Showcasing practical experience and verified achievements through professional internships and technical certifications. These reflect my applied learning, hands-on industry exposure, and continued pursuit of excellence across engineering and design disciplines.
        </p>

        {/* INTERNSHIPS */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#22c55e]">Internships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {internships.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg shadow group cursor-pointer"
                onClick={() => {
                  setType("internship");
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt={`Internship ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <FaRegEye className="text-4xl mb-2 animate-fade-in" />
                  <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATES */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#22c55e]">Education Certificates</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg shadow group cursor-pointer"
                onClick={() => {
                  setType("certificate");
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <FaRegEye className="text-4xl mb-2 animate-fade-in" />
                  <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX VIEWER */}
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
