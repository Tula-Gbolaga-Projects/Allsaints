import { Link } from "react-router";
const HomeSections = () => {
  const categories = [
    {
      title: "CARRY ALL",
      imageUrl:
        "https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dwd9e171ca/images/GLP/MW/07-05-25/070525_MW_bags-min.jpg?sw=954&sh=1192&q=80",
      link: "https://www.allsaints.com/men/bags",
      buttonText: "SHOP BAGS",
      alt: "Shop mens bags",
    },
    {
      title: "WEAR EVERYWHERE",
      imageUrl:
        "https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dwe3ba0039/images/GLP/MW/07-05-25/070525_MW_footwear-min.jpg?sw=954&sh=1192&q=80",
      link: "https://www.allsaints.com/men/boots-and-shoes",
      buttonText: "SHOP FOOTWEAR",
      alt: "Shop mens footwear",
    },
    {
      title: "ACCESSORIES ALL AREAS",
      imageUrl:
        "https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw655f2383/images/GLP/MW/07-05-25/070525_MW_accessories-min.jpg?sw=956&sh=1192&q=80",
      link: "https://www.allsaints.com/men/accessories",
      buttonText: "SHOP ACCESSORIES",
      alt: "Shop mens accessories",
    },
  ];

  return (
    <>
      {/* Video Section */}
      <Link to="/men/new" className="block w-full">
        {/* Mobile Video */}
        <video
          className="block md:hidden w-full"
          loop
          autoPlay
          muted
          playsInline
          poster="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw89d2c30f/images/GLP/MW/07-05-25/070525_MWSLIDE1-MOB-BACKUP-min.jpg"
        >
          <source
            src="https://static.allsaints.com/videos/2025/SUMMER_MW_GLP_9-16.mp4"
            type="video/mp4"
          />
        </video>

        {/* Desktop Video */}
        <video
          className="hidden md:block w-full"
          loop
          autoPlay
          muted
          playsInline
          poster="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw521afd7e/images/GLP/MW/07-05-25/070525_MWSLIDE1-DESKTOP-min.jpg"
        >
          <source
            src="https://static.allsaints.com/videos/2025/SUMMER_MW_GLP_16-9.mp4"
            type="video/mp4"
          />
        </video>
      </Link>
      {/* first Image Section */}
      <div className="relative w-full">
        {/* Responsive Image */}
        <picture className="">
          <source
            srcSet="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw515d7d82/images/GLP/MW/07-05-25/070525_MWSLIDE2-DESKTOP-min.jpg?sw=2880&sh=1620&q=80"
            media="(orientation: landscape)"
          />
          <source
            srcSet="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dwcf5518c4/images/GLP/WW/07-05-25/070525_WWGLP_HERO-slide2-mob-min.jpg?sw=750&sh=1333&q=80"
            media="(orientation: portrait)"
          />
          <img
            src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw515d7d82/images/GLP/MW/07-05-25/070525_MWSLIDE2-DESKTOP-min.jpg?sw=2880&sh=1620&q=80"
            alt="Shop Mens festival outfits"
            loading="lazy"
            width={3000}
            height={1688}
            className="w-full h-auto object-cover"
          />
        </picture>

        {/* Centered Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            ALL DAY, ALL NIGHT
          </h1>
          <Link
            to="/men/edit/festival_outfits"
            className="text-sm md:text-base font-medium underline hover:opacity-80 transition"
          >
            SHOP FESTIVAL EDIT
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        {/* Responsive Image */}
        <picture className="">
          <source
            srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw8f4f1127/images/GLP/MW/07-05-25/070525_MWSLIDE3-DESKTOP-min.jpg?sw=2880&amp;sh=1620&amp;q=80"
            media="(orientation: landscape)"
          />
          <source
            srcset="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw45a316cb/images/GLP/MW/07-05-25/070525_MW-occasionwear-MOB-min-min%202.jpg?sw=750&amp;sh=1333&amp;q=80"
            media="(orientation: portrait)"
          />
          <img
            src="https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Library-Sites-library-shared/default/dw8f4f1127/images/GLP/MW/07-05-25/070525_MWSLIDE3-DESKTOP-min.jpg?sw=2880&sh=1620&q=80"
            alt="Shop Mens occasion wear"
            loading="lazy"
            width={3000}
            height={1688}
            className="w-full h-auto object-cover"
          />
        </picture>

        {/* Centered Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            EVERY EVENT COVERED
          </h1>
          <Link
            to="/men/edit/festival_outfits"
            className="text-sm md:text-base font-medium underline hover:opacity-80 transition"
          >
            SHOP OCCASIONWEAR
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        {/* Responsive Image */}
        <Link to="https://www.allsaints.com/men/edits/holiday-shop">
          <picture className="block w-full">
            <source
              media="(min-width: 1024px)"
              srcSet="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw00d025df/images/GLP/MW/07-05-25/MW_GLP_Holiday-Edit_DT-min-v2.jpg"
            />
            <img
              src="https://www.allsaints.com/on/demandware.static/-/Library-Sites-library-shared/default/dw29c46da3/images/GLP/MW/07-05-25/070525_MW-holiday-MOB-min.jpg"
              alt="Holiday Edit"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </Link>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center px-4 py-8">
          {/* Top Text */}
          <p className="text-black font-bold text-sm md:text-[30px] tracking-wide uppercase mt-4">
            ALLSAINTS SS25 <br /> CAPE TOWN, SA
          </p>

          {/* Center Text */}
          <div className="text-white font-bold text-3xl md:text-6xl leading-snug space-y-2">
            <div>DESTINATION</div>
            <div>/</div>
            <div>EVERYWHERE</div>
          </div>

          {/* Bottom Link */}
          <div className="text-black text-xs md:text-sm underline font-medium mb-2 md:mb-4">
            <Link to="https://www.allsaints.com/men/edits/holiday-shop">
              SHOP HOLIDAY EDIT
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-[#ebeae6] grid grid-cols-1 sm:grid-cols-3 gap-1 m-auto w-full relative pb-[30px] sm:pb-[100px]">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col  ">
            <Link href={item.link} className="w-full">
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="mt-4 block pl-2 lg:pl-4">
              <h3 className="text-[25px] ">{item.title}</h3>
              <Link
                href={item.link}
                className="inline-block mt-2 text-sm hover:text-gray-700 transition"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { HomeSections };
