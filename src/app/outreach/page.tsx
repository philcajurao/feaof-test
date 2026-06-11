"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Using your available image assets
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/sm.jpeg";
import image4 from "../assets/latest_events/ads.jpg";
import image5 from "../assets/latest_events/interest.jpg"; 
import image6 from "../assets/latest_events/scholar.jpg";  

export default function OutreachPage() {
  // Static array grouping outreach initiatives by year for easy expansion under /outreach
  const outreachEvents = [
    {
      id: "outreach-2026",
      year: "2026",
      title: "Community Outreach",
      description: "Memories and milestones from our community impact initiatives, neighborhood workshops, and engagement programs.",
      // Gallery images allocated for 2026
      gallery: [
        { src: image2, alt: "Community workshop kickoff" },
        { src: image1, alt: "Local youth engaging in activities" },
        { src: image3, alt: "Neighborhood distribution network" },
        { src: image4, alt: "Mentors collaborating with community leaders" },
        { src: image5, alt: "Financial literacy outreach station" },
        { src: image6, alt: "Community award presentations" },
      ]
    },
    /* ADD FUTURE OUTREACH EVENTS HERE (e.g., 2027, 2028):
    {
      id: "outreach-2027",
      year: "2027",
      title: "Community Outreach 2027",
      description: "Memories from our 2027 outreach campaigns.",
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
          <h1 className="text-4xl font-black tracking-tight mt-3">
            COMMUNITY OUTREACH
          </h1>
        </header>

        {/* Outreach List */}
        <div className="space-y-24">
          {outreachEvents.map((event) => (
            <section key={event.id} className="border-t border-base-200 pt-12">
              
              {/* Event Info Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase rounded bg-base-200 mb-3">
                  Year {event.year}
                </span>
                <h2 className="text-3xl font-black tracking-wide">{event.title}</h2>
                <p className="text-base opacity-70 mt-2 max-w-3xl">{event.description}</p>
              </div>

              {/* Inline Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.gallery.map((img, idx) => (
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
                    {/* Dark gradient text overlay on hover */}
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