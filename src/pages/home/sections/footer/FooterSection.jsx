import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  TwitterIcon,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import React from "react";
import Button from "@/components/ui/button";
import gallery1 from "@/assets/gallery_1.png";
import gallery2 from "@/assets/gallery_2.png";
import gallery3 from "@/assets/gallery_3.png";
import gallery4 from "@/assets/gallery_4.png";
import gallery5 from "@/assets/gallery_5.png";
import gallery6 from "@/assets/gallery_6.png";
import gallery7 from "@/assets/cards.png";
import bgFooter from "@/assets/backgroundFooter.png";
import logoFooter from "@/assets/logo1.svg.png";
const FooterSection = () => {
  const socialIcons = [
    {
      icon: FacebookIcon,
      bgColor: "bg-[#e9f6f9]",
      fillcolor: "fill-[#1CA8CB]",
    },
    { icon: TwitterIcon, bgColor: "bg-[#e9f6f9]", fillcolor: "fill-[#1CA8CB]" },
    {
      icon: LinkedinIcon,
      bgColor: "bg-[#e9f6f9]",
      fillcolor: "fill-[#1CA8CB]",
    },
    { icon: MessageCircle, bgColor: "bg-[#e9f6f9]" },
    { icon: InstagramIcon, bgColor: "bg-[#e9f6f9]" },
  ];

  const quickLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Tour Guide", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      items: ["+01 234 567 890", "+09 999 999 999"],
    },
    {
      icon: MailIcon,
      items: ["mailinfo00@tours.com", "support24@tours.com"],
    },
    {
      icon: MapPinIcon,
      items: ["789 Inner Lane, Holy park,", "California, USA"],
    },
  ];

  const instagramPosts = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <footer className="relative w-full bg-transparent">
      <div className="mt-[96px]">
        {/* Newsletter */}
        <div className="mx-auto h-[181px] max-w-[1320px] border-b border-[#e1e4e6] py-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-manrope text-[40px] leading-[53.1px] font-semibold text-[#113d48]">
                Get Updated The Latest
                <br />
                Newsletter
              </h2>
            </div>

            <div>
              <div className="flex max-w-[660px] gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="h-16 w-full max-w-[415px] rounded-[32px] border border-[#6e7070] bg-white px-4 text-sm text-[#6e7070] backdrop-blur-[2.5px] focus:ring-2 focus:ring-[#1ca8cb] focus:outline-none"
                  />
                </div>
                <Button className="h -16 w-[227px] rounded-[48px] bg-[#113d48] px-6 text-base text-white hover:bg-teal-700">
                  Subscribe Now
                  <SendIcon className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mx-auto max-w-[1320px] px-4 py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* About */}
            <div>
              <div className="mb-6">
                <img src={logoFooter} alt="Logo" className="h-12 w-auto" />
              </div>

              {/* Text */}
              <p className="mb-6 text-base leading-7 font-normal text-[#666666]">
                Rapidiously myocardinate cross-platform intellectual capital
                model. Appropriately create interactive infrastructures
              </p>

              {/* Social icons */}
              <div className="flex gap-2">
                {socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className={`h-8 w-8 ${social.bgColor} flex cursor-pointer items-center justify-center rounded-2xl transition-colors hover:bg-[#d0ebf0]`}
                  >
                    <social.icon
                      className={`h-4 w-4 text-[#1ca8cb] ${social.fillcolor ?? ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-manrope mb-8 text-2xl leading-6 font-semibold text-[#113d48]">
                Quick Links
              </h3>
              <nav className="space-y-6">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-5 transition-colors hover:text-[#113d48]"
                  >
                    <div className="h-[19px] w-[7px] text-[14.4px] leading-[18.9px] text-[#888c97]">
                      <ChevronRight />
                    </div>
                    <span className="text-base leading-[21px] font-normal text-[#888c97] transition-colors group-hover:text-[#113d48]">
                      {link.text}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-manrope mb-8 text-2xl leading-6 font-semibold text-[#113d48]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e9f6f9]">
                      <contact.icon className="h-6 w-6 text-[#1ca8cb]" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                      {contact.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-base leading-7 font-normal text-[#6e7070]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="font-manrope mb-8 text-2xl leading-6 font-semibold text-[#113d48]">
                Instagram Post
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((post, index) => (
                  <img
                    key={index}
                    className="h-[100px] w-full rounded-lg object-cover"
                    alt={`Instagram post ${index + 1}`}
                    src={post}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="w-full bg-[#262a36] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgFooter})` }}
        >
          <div className="mx-auto max-w-[1320px] px-4 py-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-1 text-sm text-white">
                <span>Copyright 2025</span>
                <span className="font-semibold">Tours</span>
                <span>. All Rights Reserved.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-base text-white">We Accept</span>
                <div
                  className="h-8 w-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${gallery7})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
