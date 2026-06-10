"use client"

import { Metadata } from "next";
import EventsBanner from "../components/banners/EventsBanner";
import Image from "next/image";
import CountDown from "../components/CountDown";

// Import your pickleball asset for use in the static list
import pickleball from "@/app/assets/events/pickleball.jpg";

export default function Events() {
  return (
    <div className="flex flex-col justify-center relative">
      <EventsBanner />

      <CountDown />

      <div className="px-4 sm:px-6 py-24 flex flex-col items-center w-full">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20 sm:mb-32 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-black text-neutral uppercase tracking-tighter mb-6">
            Previous <span className="text-accent">Events</span>
          </h1>
          <p className="text-lg sm:text-xl text-base-content/60 leading-relaxed">
            Take a look back at our memorable moments and upcoming gatherings designed to empower the next generation.
          </p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>

        {/* --- Event List --- */}
        <div className="w-full max-w-6xl space-y-24 sm:space-y-40">

          {/* 1. Pickleball Tournament [Text Left, Image Right] */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">April 18, 2026</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-neutral">Dink For a Cause - Pickleball Tournament</h2>
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed">
                Together we can play, have fun, and create opportunities for the next generation. Our community gathered at Dill Dinkers at Manassas Mall for friendly matches, local support, and networking.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl transform group-hover:rotate-2 transition-all duration-500">
                <Image 
                  src={pickleball} 
                  alt="Dink For a Cause Pickleball Tournament Flyer" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </section>

          {/* 2. CCWRC Outreach [Image Left, Text Right] */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group">
            {/* Text Box holds order-1 on mobile, lg:order-2 on desktop */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">February 2026</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-neutral">Christian Center of World Restoration Outreach</h2>
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed">
                A community-focused initiative bridging the gap between local resources and youth potential, fostering growth through faith and entrepreneurship.
              </p>
            </div>
            {/* Image Box holds order-2 on mobile, lg:order-1 on desktop */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden shadow-xl transform group-hover:rotate-2 transition-all duration-500">
                  <Image src="/events/church/IMG_3778.JPEG" alt="Outreach" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="relative h-48 sm:h-64 mt-4 sm:mt-8 rounded-3xl overflow-hidden shadow-xl transform group-hover:-rotate-2 transition-all duration-500">
                  <Image src="/events/church/IMG_3795.JPEG" alt="Community Support" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Spring Gala [Text Left, Videos Right] */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 group">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">April 2025</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-neutral">Spring Gala Event</h2>
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed mb-4 sm:mb-8">
                Watch our students take the stage. Our flagship gala combines student showcases with high-energy networking and business pitches.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid gap-6 w-full">
                <div className="aspect-video relative w-full rounded-3xl overflow-hidden shadow-2xl border-b-4 border-accent">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/w6UiWqXI_lo" allowFullScreen></iframe>
                </div>
                <div className="aspect-video relative w-full rounded-3xl overflow-hidden shadow-2xl border-b-4 border-accent lg:-ml-12">
                   <iframe className="w-full h-full" src="https://www.youtube.com/embed/SVMYB5t8QSk" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Summer Bootcamp [FIXED: Image Left, Text Right] */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group">
            {/* Text Container: Pulls to the right side on desktop */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">June 2025</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-neutral">Summer Bootcamp</h2>
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed">
                An intensive experience where successful business owners, bankers, and community leaders train kids in entrepreneurship and professional skills.
              </p>
            </div>
            {/* Image Grid Container: Pushes to the left side on desktop */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative h-48 sm:h-72 rounded-[2rem] overflow-hidden shadow-xl transform group-hover:rotate-2 transition-all duration-500">
                   <Image src="/events/summer_bootcamp_2025/summer_bootcamp_image_1.JPEG" alt="Kids Learning" fill className="object-cover" sizes="50vw" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="relative h-48 sm:h-72 rounded-[2rem] overflow-hidden shadow-xl transform group-hover:-rotate-2 transition-all duration-500">
                   <Image src="/events/summer_bootcamp_2025/summer_bootcamp_image_2.JPEG" alt="Kids Learning" fill className="object-cover" sizes="50vw" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Holiday Event [Text Left, Image Right] */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">2024 - 2026 Tradition</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4 sm:mb-6 leading-tight text-neutral">Annual Holiday Event</h2>
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed">
                The year-end celebration where kids recognize their accomplishments. Includes the signature "SHARKTANK" competition where sponsors participate as judges.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden shadow-xl transform group-hover:rotate-2 transition-all duration-500">
                  <Image src="/events/holiday/IMG_4627.jpg" alt="Holiday 2024" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="relative h-48 sm:h-64 mt-4 sm:mt-8 rounded-3xl overflow-hidden shadow-xl transform group-hover:-rotate-2 transition-all duration-500">
                  <Image src="/events/holiday/IMG_4364.JPEG" alt="Holiday 2025/26" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}