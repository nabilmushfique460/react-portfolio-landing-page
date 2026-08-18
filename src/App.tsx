import { useState } from "react";
import { Play, Menu, X } from "lucide-react";

const NAV_LINKS = ["ABOUT", "PROCESS", "PROJECTS", "CATALOG", "D.O.T", "TALK"];

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
        fill="white"
      />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Centered portrait photo */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
        <img
          src="/adam-roberts.jpg"
          alt="Adam Roberts"
          className="h-[420px] w-[420px] object-cover rounded-full"
        />
      </div>

      {/* Content wrapper above video */}
      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* 1. NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          <a href="#" aria-label="Grilled Pixels" className="block">
            <Logo />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* 2. FOUR-COLUMN META GRID */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {/* COL 1 */}
          <div>
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="block font-normal">ADAM</span>
              <span className="font-pixel block text-2xl md:text-3xl">ROBERTS</span>
            </h2>
            <span className="mt-3 block text-[10px] text-white/50">*</span>
            <p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">
              Grilled Pixels is my
              <br />
              personal brand - I came up
              <br />
              with it in 2004 based on
              <br />
              "cooking up ideas"
            </p>
          </div>

          {/* COL 2 */}
          <div className="text-right lg:text-left">
            <h2 className="text-lg leading-tight tracking-wide md:text-xl">
              <span className="block font-normal">DESIGN &amp;</span>
              <span className="font-pixel block text-2xl md:text-3xl">ENGINEERING</span>
            </h2>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">
              What I Do
            </h3>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
              I create the top 1% of experiences for brands and digital products
            </p>
          </div>

          {/* COL 4 */}
          <div className="text-right lg:text-left">
            <h3 className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">
              Services
            </h3>
            <ul className="space-y-0.5 text-sm leading-relaxed text-white/90">
              <li>Branding</li>
              <li>Creative Direction &amp; Strategy</li>
              <li>UX/UI Design</li>
              <li>Web Development (React/Nextjs)</li>
              <li>3D, WebGL / Photography</li>
              <li>Video &amp; Animation</li>
            </ul>
          </div>
        </div>

        {/* 3. FLEX SPACER */}
        <div className="flex-1" />

        {/* 4. BOTTOM SECTION */}
        <div className="pb-4">
          {/* ROW A */}
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
            {/* Hero headline */}
            <h1
              style={{ lineHeight: 0.72 }}
              className="text-3xl font-normal uppercase tracking-wide sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
            >
              I BRING THE
              <br />
              <span className="font-pixel inline-block text-[1.25em] font-normal leading-none align-baseline">
                UNEXPECTED
              </span>{" "}
              TO
              <br />
              BRAND &amp; DIGITAL
              <br />
              <span className="font-pixel inline-block text-[1.25em] font-normal leading-none align-baseline">
                EXPERIENCES
              </span>
            </h1>

            {/* Right column */}
            <div className="flex flex-col justify-end gap-4 sm:gap-6">
              <button
                type="button"
                className="self-start flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider">PLAY SHOWREEL</span>
              </button>

              <div className="self-start flex flex-wrap items-stretch gap-2 text-sm text-white/80 sm:gap-3 lg:self-end">
                <div className="bg-[#0B0B0B] flex items-center gap-2 px-3 py-2 sm:px-4">
                  <span className="text-sm font-bold tracking-tight sm:text-base">FWA</span>
                  <span className="text-xs text-white/50">x1</span>
                </div>
                <div className="bg-[#0B0B0B] flex items-center gap-2 px-3 py-2 sm:px-4">
                  <span className="text-lg font-bold sm:text-xl">W.</span>
                  <span className="text-xs text-white/50">x7</span>
                </div>
                <div className="bg-[#0B0B0B] flex items-center gap-2 px-3 py-2 sm:px-4">
                  <span className="text-[10px] font-bold tracking-tight sm:text-xs">
                    CSSDesignAwards
                  </span>
                  <span className="text-xs text-white/50">x22</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW B — footer strip */}
          <div className="mt-4 grid grid-cols-1 gap-2 pt-4 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <div className="text-xs text-white/60">
              Open to freelance, contract or full-time.{" "}
              <a
                href="#"
                className="text-red-500 transition-colors hover:text-red-400"
              >
                Schedule a call
              </a>
            </div>
            <div className="text-xs text-white/60 sm:text-right">
              5 full cases &bull; 82 archive fragments &bull; 22 catalog items
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <a href="#" aria-label="Grilled Pixels" className="block">
            <Logo />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 transition-opacity hover:opacity-70"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
              className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
