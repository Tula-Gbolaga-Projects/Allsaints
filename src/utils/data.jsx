const footerSections = [
  {
    title: "HELP",
    items: [
      "Contact Us",
      "Track Your Order",
      "Return Your Order",
      "Delivery",
      "Returns",
      "Help Centre",
      "Report A Scam",
    ],
  },
  {
    title: "WE ARE ALLSAINTS",
    items: [
      "About Us",
      "Sustainability",
      "Our Communities",
      "Gender Pay Gap",
      "Modern Slavery Act",
      "Careers",
    ],
  },
  {
    title: "INFORMATION",
    items: ["Store Locator", "Site Map", "AllSaints App", "Klarna"],
  },
  {
    title: "CORPORATE & LEGAL",
    items: [
      "Terms & Conditions",
      "Terms Of Site Use",
      "Privacy Policy",
      "Tax Policy",
      "Accessibility",
      "Cookies",
      "Manage Cookies",
    ],
  },
];

const menuItemGroup = [
  {
    name: "Clothing",
    categories: [
      {
        name: "Shirts",
        description:
          "Check out our collection of men's shirts - they work for any occasion. Choose from bold Hawaiian styles, classic ones with Ramskull embroidery, checked shirts, relaxed military overshirts and more. Crafted from conscious materials in a range of fits (slim, regular, relaxed and oversized) and colours (black, white, blue, khaki, red and more). Just pair them with your favourite",
        subCategories: [
          {
            name: "Hawaiian Shirts",
            description:
              "Make a statement in our men's Hawaiian shirts - they're an AllSaints wardrobe staple. Crafted from conscious LENZING™ ECOVERO™in slim, regular and relaxed silhouettes. Choose your favourite print; floral, snakeskin, leopard, checked, paisley and more. Wear open over a plain tee or closed with jeans and let it do the talking",
          },
          {
            name: "Checked Shirts",
            description:
              "You can't go wrong with a checked shirt, explore our men's collection now. Shaped to slim, regular, relaxed and oversized fits, they're made from conscious materials in a range of finishes - some are brushed for a supersoft handfeel. Choose your favourite colour; black, white, blue, red or orange and you're ready to go",
          },
        ],
        others: [
          "long sleeve shirts",
          "short sleeve shirts",
          "overshirts",
          "suits & tailoring",
          "wedding guest outfits",
          "occasionwear",
          "workwear",
        ],
      },
      {
        name: "Shorts",
        description:
          "Too hot for jeans? Our men's shorts edit has you covered. Whether it's festival favourites or everyday wear, our collection offers a wide range of styles and lengths. From smart tailored cuts to breezy relaxed fits, frayed denim to classic chinos and cargos, each style pairs perfectly with oversized cotton T-shirts, bold Hawaiian prints and our ever present Ramskull tees",
        subCategories: [],
        others: [
          "Trousers",
          "Jeans",
          "Loungewear",
          "Denim Shop",
          "Holiday Shop",
          "Swimwear & Beachwear",
        ],
      },
    ],
  },
  {
    name: "Accesories",
    categories: [
      {
        name: "Bags",
        description:
          "Our men's leather bags work around you. Discover crossbody and shoulder bags, backpacks and cotton canvas totes in a range of silhouettes and colours - choose from black, white, brown and the bold ones in between. You're sure to find something to match any look.",
        subCategories: [],
        others: [
          "Jewellery",
          "Belts",
          "Hats",
          "Sunglasses",
          "Fragrance",
          "Underwear & Socks",
          "Wallet & Cardholders",
        ],
      },
      {
        name: "Jewellery",
        description:
          "Looking for that finishing touch? Our men's accessories line-up includes our collection of men's jewellery - from necklaces, rings and bracelets to earrings. Our uniquely designed men's jewellery - including pieces crafted in silver and gold colours - echo the hardware that is seen as a design signature throughout our men's collections. Carabiner clasps on chains, hexagon 'Hex' shapes on earrings and engraved branding on rings are the details that add a unique touch. A simple silver-coloured men's chain is an everyday essential - wear to elevate a simple white t-shirt or to add rock 'n' roll spirit to leather ensembles. Single earrings can be mixed and matched, or worn individually to add frontman appeal to everyday outfits. Rings and bracelets promise to bring attitude to simple shirts and tailoring. Looking for a gift? Jewellery fits the bill. Opt for two-toned choices, packaged in an AllSaints pouch, perfect for a present",
        subCategories: [],
        others: [
          "Bags",
          "Belts",
          "Hats",
          "Sunglasses",
          "Fragrance",
          "Underwear & Socks",
          "Wallet & Cardholders",
        ],
      },
    ],
  },
  {
    name: "Footwear",
    categories: [
      {
        name: "Boots",
        description:
          "Biker, hiker, chelsea and western- whatever your vibe, we've got the leather boots to match. Explore our collection of men's footwear and find your ideal fit. Expertly made from premium materials with metal hardware to detail. They look great with our classic denim jeans and tailored trousers - try for yourself. ",
        subCategories: [],
        others: ["Trainers", "Shoes", "Sliders"],
      },
      {
        name: "Trainers",
        description:
          "Off-duty days call for our men's trainers - they're so comfortable you won't want to take them off. Expertly made from our premium leather with suede panels, laces and AllSaints signatures printed or embossed on the sides. Black, white, khaki or leopard print...they look great with our jeans, shorts and trousers. The styling options are endless. ",
        subCategories: [],
        others: ["Boots", "Shoes", "Sliders"],
      },
    ],
  },
];

const SampleProducts = [
  {
    title: "Netley Short Sleeve Lace Shirt",
    price: 129,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#eae4db"],
    images: {
      "#000000": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",

        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
      ],
      "#eae4db": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
      ],
    },
  },
  {
    title: "Netley Short Sleeve Lace Shirt",
    price: 129,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#eae4db"],
    images: {
      "#000000": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
      ],
      "#eae4db": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
      ],
    },
  },
  {
    title: "Netley Short Sleeve Lace Shirt",
    price: 129,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#eae4db"],
    images: {
      "#000000": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
      ],
      "#eae4db": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
      ],
    },
  },
  {
    title: "Netley Short Sleeve Lace Shirt",
    price: 129,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#eae4db"],
    images: {
      "#000000": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
      ],
      "#eae4db": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
      ],
    },
  },
  {
    title: "Netley Short Sleeve Lace Shirt",
    price: 129,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#eae4db"],
    images: {
      "#000000": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-5.json?_i=AG",
      ],
      "#eae4db": [
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
        "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M028SD-10061.json?_i=AG",
      ],
    },
  },
];
export { footerSections, menuItemGroup, SampleProducts };
