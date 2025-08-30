/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MapPin, Clock, ChevronDown, Globe } from "lucide-react";
import logoBg from "../../../../assets/MaskGroup.png";
import logo from "../../../../assets/logo.svg.png";
import logoPoint from "../../../../assets/maskPoint.png";
function Header() {
  const [language, setLanguage] = useState("Language");

  const topBarLinks = [
    { label: "Faq", href: "#" },
    { label: "Support", href: "#" },
    { label: "Sign in / Register", href: "#", hasIcon: true },
  ];

  const navigationItems = [
    { label: "Home", href: "#", hasDropdown: true },
    { label: "About Us", href: "#" },
    { label: "Destinations", href: "#", hasDropdown: true },
    { label: "Services", href: "#" },
    { label: "Trip", href: "#", hasDropdown: true },
    { label: "Pages", href: "#", hasDropdown: true },
    { label: "Blog", href: "#", hasDropdown: true },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="h-[47px] w-full border-b border-[#e1e4e5]">
        <div className="flex h-full items-center justify-between px-[72px]">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#0d0d0c]" />
              <span className="text-sm font-medium text-[#0d0d0c]">
                45 New Eskaton Road, Austria
              </span>
            </div>
            <div className="h-3.5 w-px bg-[#999999]" />
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#0d0d0c]" />
              <span className="text-sm font-medium text-[#0d0d0c]">
                Sun to Friday: 8.00 am - 7.00 pm, Austria
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <div className="flex cursor-pointer items-center rounded-full border border-[#e1e4e5] px-[13px] py-1">
              <Globe size={14} className="mr-1 text-[#0d0d0c]" />
              <span className="text-sm">{language}</span>
              <ChevronDown size={14} className="ml-1 text-[#0d0d0c]" />
            </div>

            {/* Links */}
            {topBarLinks.map((link, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#0d0d0c] transition hover:text-[#113d48]"
                >
                  {link.label}
                </a>
                {link.hasIcon && <ChevronDown size={14} />}
                {idx < topBarLinks.length - 1 && (
                  <div className="ml-2 h-3.5 w-px bg-[#999999]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="relative h-[92px] w-[364.8px] overflow-hidden">
          {/* Background */}
          <img
            src={logoBg}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="absolute top-[24px] left-[72px] h-[56px] w-[197px]"
          />
        </div>

        {/* Menu */}
        <nav className="flex h-[92px] w-[867.52px] items-center gap-[36px]">
          {navigationItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-1 text-base font-medium text-[#0d0d0c] transition hover:text-[#113d48]"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={16} />}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="flex h-[56px] w-[230px] items-center justify-center gap-x-2 rounded-[48px] bg-[#113D48] text-white transition hover:bg-teal-700"
          style={{ position: "absolute", left: "1618.61px", top: "66px" }}
        >
          <span>Request A Quote</span>
          <img src={logoPoint} alt="logoPoint" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
