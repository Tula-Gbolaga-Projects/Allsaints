import React, { useState } from "react";
import { Link } from "react-router";
import { footerSections } from "../../utils/data";
import {
  Instagram,
  Discord,
  Tiktok,
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
} from "../../assets/SocialIcons";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-white text-black relative bottom-0 ">
      {/* PROMO */}
      <div className="px-4 lg:px-8 ">
        <div className="py-4 lg:hidden">
          <h2 className="text-lg font-semibold">
            Enjoy 10% off your first AllSaints order
          </h2>
          <button className="mt-2 px-4 py-2 bg-black text-white">
            UNLOCK 10% OFF
          </button>
        </div>

        {/* DESKTOP FOOTER */}
        <div className="hidden lg:grid grid-cols-6 gap-6 py-8  ">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link to="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h2 className="text-[30px] font-semibold mb-2">
              Enjoy 10% off your first AllSaints order
            </h2>
            <button className="px-4 py-2 bg-black text-white">
              UNLOCK 10% OFF
            </button>
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="lg:hidden ">
          {footerSections.map((section, index) => (
            <div key={section.title} className="border-t">
              <button
                className="w-full flex justify-between py-3 font-bold"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <ul className="pl-2 pb-2 text-sm space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link to="#" className="hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* SOCIAL + APPS */}
        <div>
          <p className="mb-2">Follow Us</p>
          <div className="flex space-x-4 text-xl mb-2">
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Instagram className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Tiktok className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Discord className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Facebook className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Twitter className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Youtube className="w-full h-full" />
              </div>
            </Link>
            <Link to="#">
              <div className="w-5 h-5 flex items-center justify-center">
                <Pinterest className="w-full h-full" />
              </div>
            </Link>
          </div>
          <div className="flex space-x-2 mb-2">
            <img
              src="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw0efd1423/images/global/footer/AppStore.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw603380b2/images/global/footer/GooglePlay.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className=" flex flex-col lg:flex-row justify-between text-sm border-t py-2 bg-black text-white border-b border-white px-4 lg:px-8">
        <p className="py-2 order-2 lg:order-1">
          © 2025 AllSaints All Rights Reserved
        </p>
        <p className="flex items-center py-2 order-1 lg:order-2 ">
          <span className="pr-2">
            <img
              src="https://www.allsaints.com/on/demandware.static/Sites-allsaints-uk-Site/-/default/dw27e69caa/images/icons/flags/gb.svg"
              width="20"
              height="15"
              alt="GB flag"
              loading="lazy"
            />
          </span>
          <span> United Kingdom | EN (£)</span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
