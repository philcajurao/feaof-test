import Image from "next/image";
import React from "react";
import Link from "next/link";
import bg from "../assets/bg.png";
import DonateQR from "./DonateQR";

// --- SPONSOR IMPORTS ---
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";
import fts from "../assets/sponsors/FTS.png";

// --- PARTNER IMPORTS ---
import fhGrowthFundLogo from "@/app/assets/partners/fhGrowthFund.png";
import fortuneLogo from "@/app/assets/sponsors/fts-full-bg.png";

export default function RecentSponsors() {
  const partners = [
    { name: "FH Growth Fund", logo: fhGrowthFundLogo },
    { name: "Roberts", logo: fhGrowthFundLogo },
    { name: "Fortune Tech Solutions", logo: fortuneLogo }
  ];

  return (
    <div className="bg-neutral/98">
      {/* 1. BRONZE SPONSORS (Original Style) */}
      <div className="py-16 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-8 relative z-10">
          <h2 className="text-neutral-content sm:text-4xl font-bold text-2xl max-w-2xl text-center px-2">
            Annual Bronze Sponsors
          </h2>
        </div>

        {/* Decorative Backgrounds */}
        <Image
          src={bg}
          alt="bg"
          className="absolute h-fit -left-50 top-0 hidden sm:block pointer-events-none opacity-30"
        />
        <Image
          src={bg}
          alt="bg"
          className="absolute rotate-180 perspective-distant h-fit -right-60 -top-1 hidden sm:block pointer-events-none opacity-30"
        />

        <div className="flex flex-wrap px-4 w-full items-center justify-center gap-10 md:gap-20 mb-10 relative z-10">
          <Link href="https://fortunehomesconstruction.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="Fortune Homes Construction logo" src={fhc} loading="lazy" width={230} />
          </Link>
          <Link href="https://www.fairfaxpropertymanagementinc.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="PMI of Fairfax logo" src={pmi} loading="lazy" width={230} />
          </Link>
          <Link href="https://www.fortunetechsolutions.net/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="Fortune Tech Solutions logo" src={fts} loading="lazy" width={230} />
          </Link>
        </div>
      </div>


      {/* 3. Donate QR Section */}
      <div className="py-16">
        <DonateQR />
      </div>
    </div>
  );
}