"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Importing your image assets
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/sm.jpeg";
import image4 from "../assets/latest_events/ads.jpg";
import image5 from "../assets/latest_events/interest.jpg"; 
import image6 from "../assets/latest_events/scholar.jpg";  

export default function BootcampsPage() {
  // Static list of all bootcamps. You can seamlessly add 2026, 2027, etc., below.
  const bootcamps = [
    {
      id: "bootcamp-2025",
      year: "2025",
      title: "Summer Bootcamp",
      description: "A look back at our 2025 summer bootcamp covering product development, marketing systems, and advertising strategy.",
      // Gallery images allocated explicitly for 2025
      gallery: [
        { src: image1, alt: "Students collaborating on projects" },
        { src: image2, alt: "Product ideation workshop" },
        { src: image3, alt: "Social media strategy discussion" },
        { src: image4, alt: "Advertising 101 presentation" },
        { src: image5, alt: "Business funding pitch setup" },
        { src: image6, alt: "Scholarship distribution" },
      ]
    },
    /* FUTURE BOOTCAMPS CAN BE ADDED HERE:
    {
      id: "bootcamp-2026",
      year: "2026",
      title: "Summer Tech Bootcamp",
      description: "Memories from our 2026 summer cohort.",
      gallery: []
    }
    */
  ];

  return (
    <main className="min-h-screen bg-base-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header */}
        <header className="mb-16">
          <Link href="/" className="text-sm font-semibold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity">
            ← Back
          </Link>
          {/* <h1 className="text-4xl font-black tracking-tight mt-3">
            BOOTCAMP ARCHIVES
          </h1> */}
        </header>

        {/* Bootcamps List */}
        <div className="space-y-24">
          {bootcamps.map((camp) => (
            <section key={camp.id} className="border-t border-base-200 pt-12">
              
              {/* Info Label Row */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase rounded bg-base-200 mb-3">
                  Year {camp.year}
                </span>
                <h2 className="text-3xl font-black tracking-wide">{camp.title}</h2>
                <p className="text-base opacity-70 mt-2 max-w-3xl">{camp.description}</p>
              </div>

              {/* 2025 Image Gallery Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {camp.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group relative h-64 w-full overflow-hidden rounded-2xl bg-base-200 border border-base-300 shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.alt}
                      placeholder="blur"
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    {/* Hover text label overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-sm font-bold text-white tracking-wide">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}