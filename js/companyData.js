/**
 * =============================================================================
 * WHITE-LABEL MASTER DEMO TEMPLATE - CENTRALIZED DATA CONFIGURATION
 * =============================================================================
 * 
 * Editing this single configuration file updates all dynamic content across the
 * entire website instantly: branding, contact details, social links, council
 * members, services, process steps, and map coordinates.
 * 
 * Architecture:
 * - Compatible with Vanilla JS browser runtime (`window.COMPANY_DATA`)
 * - Compatible with CommonJS environments (`module.exports`)
 * - Compatible with ES Module bundlers (`export default`)
 * =============================================================================
 */

const COMPANY_DATA = {
  // 1. Company Identity & Branding
  company: {
    legalName: "[COMPANY NAME] PRIVATE LIMITED",
    shortName: "[COMPANY NAME]",
    brandTitleMain: "Demo",
    brandTitleSub: "GRAVURES PRIVATE LIMITED",
    cin: "U00000XX2024PTC000000",
    roc: "RoC [State / Region]",
    incorporationDate: "May 9, 2024",
    entityStatus: "Active Private Limited Entity (RoC [State / Region])",
    tagline: "Precision Behind Every Impression.",
    description: "Specialized in precision rotogravure cylinder manufacturing, engraving solutions, and high-performance flexible packaging services.",
    logo: "svg/brand-logo.svg",
    bottomTagline: "Rotogravure • Cylinder Manufacturing • Packaging",
    bottomCommitment: "Let’s build better packaging together.",
    copyrightYear: "2024–2026"
  },

  // 2. Main Site Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Projects", href: "#projects" },
    { label: "Council", href: "#council" },
    { label: "Facility", href: "#facility" },
    { label: "Contact", href: "#contact" }
  ],

  // 3. Contact Details & Standardized Demo Placeholders
  contact: {
    primaryPhone: "+91 00000 00000",
    primaryPhoneLink: "tel:+910000000000",
    primaryEmail: "contact@companydomain.com",
    primaryEmailLink: "mailto:contact@companydomain.com",
    
    // Standardized Demo Placeholder Address
    registeredOffice: {
      line1: "Plot No. 00, Phase-I, Industrial Corridor,",
      line2: "[Industrial Zone Name], [City Name],",
      city: "[City Name]",
      state: "[State Name]",
      postalCode: "[PIN Code]",
      country: "[Country]",
      full: "Plot No. 00, Phase-I, Industrial Corridor, [Industrial Zone Name], [City Name], [State Name] – [PIN Code], [Country]"
    },
    
    // WhatsApp Configuration with Dynamic Message Construction
    whatsappNumber: "910000000000",
    whatsappMessage: "Hello [Company Name], I would like to inquire about your rotogravure cylinders and packaging solutions.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
    }
  },

  // 4. Social Links & Digital Handles
  socialLinks: [
    { name: "Phone", icon: "phone", url: "tel:+910000000000" },
    { name: "Email", icon: "email", url: "mailto:contact@companydomain.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/company/companydomain" },
    { name: "X", icon: "x", url: "https://x.com/companydomain" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/companydomain" },
    { name: "YouTube", icon: "youtube", url: "https://youtube.com/@companydomain" }
  ],

  // 5. Leaflet Interactive Satellite Map Configuration (Standardized Demo Coordinates)
  map: {
    lat: 17.4560,
    lng: 78.4380,
    zoom: 16,
    locationLabel: "[COMPANY NAME] PRIVATE LIMITED",
    addressLabel: "[Industrial Zone], [City], [State]",
    satelliteTilesUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    satelliteAttribution: "Tiles &copy; Esri &mdash; Satellite Imagery"
  },

  // 6. Hero Section Configuration
  hero: {
    eyebrow: "ROTOGRAVURE CYLINDER MANUFACTURERS & ENGRAVERS",
    headingLine1: "Precision Cylinders.",
    headingLine2: "Packaging That Performs.",
    description: "Advanced rotogravure cylinder and engraving solutions engineered for high-quality flexible packaging.",
    primaryCta: { label: "Explore Our Capabilities →", href: "#capabilities" },
    secondaryCta: { label: "Contact →", href: "#contact" },
    backgroundImage: "harshita web img/file_00000000c57881faa6b3fdcb92e1a302.png"
  },

  // 7. Trusted Brands Marquee Heading
  trustedBrands: {
    heading: "TRUSTED BY PACKAGING & CONSUMER BRANDS",
    bannerImage: "harshita web img/file_000000008d4481faa6fd0d31f44ebd27.png"
  },

  // 8. About Section
  about: {
    eyebrow: "ABOUT OUR COMPANY",
    heading: "Precision Behind Every Impression.",
    description: "We focus on engineering high-quality rotogravure cylinders and engraving solutions that help packaging achieve sharp detail, rich reproduction and consistent print performance.",
    image: "harshita web img/file_0000000016d081faaa427110c69feaad.png"
  },

  // 9. Capabilities & Core Services
  capabilities: {
    eyebrow: "Artwork",
    subheading: "FROM CONCEPT TO FINAL PRINT",
    cards: [
      {
        number: "01",
        title: "01 Packaging Design",
        description: "From concept to final artwork, we create packaging designs crafted for exceptional gravure reproduction.",
        image: "harshita web img/file_00000000079c82119e225a75ffe66f8c.png"
      },
      {
        number: "02",
        title: "02 Precision Cylinders",
        description: "Precision-engineered gravure cylinders built to reproduce every detail with consistency and accuracy.",
        image: "harshita web img/file_0000000073e881fab3392430a5c597f5.png"
      },
      {
        number: "03",
        title: "03 Gravure Printing",
        description: "Turning refined artwork into striking packaging with rich color, crisp detail and consistent print quality.",
        image: "harshita web img/file_000000007d0c81faa81dbd9de9223f3a.png"
      }
    ]
  },

  // 10. Six-Step Process Flow
  processFlow: {
    steps: [
      {
        step: "01",
        title: "01 Brief",
        subtitle: "Client Requirements",
        image: "harshita web img/1790417680447.png"
      },
      {
        step: "02",
        title: "02 Design",
        subtitle: "Packaging Artwork",
        image: "harshita web img/1790417577541.png"
      },
      {
        step: "03",
        title: "03 Approval",
        subtitle: "Final Artwork",
        image: "harshita web img/1790417634535.png"
      },
      {
        step: "04",
        title: "04 Cylinder",
        subtitle: "Precision Engraving",
        image: "harshita web img/1790417823046.png"
      },
      {
        step: "05",
        title: "05 Printing",
        subtitle: "Gravure Printing",
        image: "harshita web img/1790417965234.png"
      },
      {
        step: "06",
        title: "06 Packaging",
        subtitle: "Finished Packaging",
        image: "harshita web img/1790418012241.png"
      }
    ],
    rightSideImage: "harshita web img/file_00000000e1b0820bb65d15d91239dddb.png"
  },

  // 11. Large Cinematic Panels
  cinematicPanels: [
    {
      id: "panel-packaging",
      align: "left",
      eyebrow: null,
      heading: "Made for Packaging That Gets Noticed.",
      supporting: "Premium packaging, powered by precision rotogravure.",
      arrow: "→",
      image: "harshita web img/file_000000009b6c8211b3d90a29d9bf7b48.png"
    },
    {
      id: "panel-engraving",
      align: "right",
      eyebrow: "THE ART OF ENGRAVING",
      heading: "Precision in Every Detail.",
      supporting: "Fine engraving. Consistent cells. Superior print quality.",
      arrow: "→",
      image: "harshita web img/IMG_20260926_085414.png"
    },
    {
      id: "panel-printing",
      align: "left",
      eyebrow: null,
      heading: "Made for Packaging That Gets Noticed.",
      supporting: "Premium packaging, powered by precision rotogravure.",
      arrow: "→",
      image: "harshita web img/file_00000000f21081f88078c60bd9411cc7.png"
    }
  ],

  // 12. Packaging Showcase Gallery (12 Pouches + 1 Showcase Card)
  packagingGallery: {
    pouches: [
      { id: 1, image: "harshita web img/1790485798944.png", alt: "Coffee Take Away Mockup Packaging" },
      { id: 2, image: "harshita web img/1790485805933.png", alt: "Happy Chili Powder Pouch Packaging" },
      { id: 3, image: "harshita web img/1790485813257.png", alt: "Snack & Food Packaging Pouch" },
      { id: 4, image: "harshita web img/1790485819513.png", alt: "Specialty Flexible Food Pouch" },
      { id: 5, image: "harshita web img/1790485825756.png", alt: "Premium Spices Pouch Packaging" },
      { id: 6, image: "harshita web img/1790485831804.png", alt: "Tea & Herb Pouch Packaging" },
      { id: 7, image: "harshita web img/1790485837828.png", alt: "Artisan Dry Fruit Packaging" },
      { id: 8, image: "harshita web img/1790485843503.png", alt: "Nut & Confectionery Pouch Packaging" },
      { id: 9, image: "harshita web img/1790485859168.png", alt: "Gourmet Snack Packaging Pouch" },
      { id: 10, image: "harshita web img/1790485864746.png", alt: "Beverage & Mix Pouch Packaging" },
      { id: 11, image: "harshita web img/1790485876284.png", alt: "Organic Dry Goods Packaging" },
      { id: 12, image: "harshita web img/1790485882719.png", alt: "Custom Flexible Printed Pouch" }
    ],
    showcaseCard: {
      image: "harshita web img/file_000000003a1081fa96530adc065be817.png",
      alt: "Rotogravure Cylinders and Printed Flexible Packaging Array"
    }
  },

  // 13. Leadership Council (Dummy names with AI portrait mappings preserved)
  council: {
    eyebrow: "OUR LEADERSHIP",
    heading: "Our Council",
    description: "Guided by a shared vision and a commitment to excellence, our council brings together experience, innovation and leadership to drive a stronger tomorrow.",
    tagline: "Five voices. One shared vision.",
    members: [
      {
        name: "Rajesh Sharma",
        title: "Managing Director",
        image: "harshita web img/IMG_20260928_212444.png"
      },
      {
        name: "Vikram Mehta",
        title: "Executive Director",
        image: "harshita web img/IMG_20260928_212529.png"
      },
      {
        name: "Karthik Verma",
        title: "Technical Director",
        image: "harshita web img/IMG_20260928_212557.png"
      },
      {
        name: "Ananya Singhania",
        title: "Operations Director",
        image: "harshita web img/IMG_20260928_212618.png"
      },
      {
        name: "Pooja Reddy",
        title: "Director of Quality & R&D",
        image: "harshita web img/IMG_20260928_212645.png"
      }
    ]
  },

  // 14. Manufacturing & Operational Facility (Standardized Demo Placeholders)
  facility: {
    eyebrow: "OUR FACILITY",
    heading: "Corporate & Manufacturing Facility",
    description: "Operating modern manufacturing infrastructure equipped with advanced rotogravure cylinder engraving technology to ensure premium quality flexible packaging solutions.",
    image: "harshita web img/file_000000009a3081fabf57928df05c5ddd.png",
    block1Label: "REGISTERED OFFICE & HQ",
    block1Value: "Plot No. 00, Phase-I, Industrial Corridor,<br>[Industrial Zone Name], [City Name], [State Name] [PIN Code]",
    block2Label: "CORPORATE IDENTITY (CIN)",
    block2Value: "U00000XX2024PTC000000<span style=\"display:block; font-size: 0.8rem; font-weight: 500; color: #6B665E; margin-top: 4px;\">Active Private Limited Entity (RoC [State / Region])</span>"
  },

  // 15. Footer Columns & Links
  footer: {
    services: [
      "Packaging Design",
      "Precision Cylinders",
      "Gravure Printing",
      "Printing Solutions"
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#capabilities" },
      { label: "Gallery", href: "#projects" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

// =============================================================================
// UNIVERSAL EXPORT DEFINITIONS (Browser window, CommonJS, & ESM)
// =============================================================================
if (typeof window !== 'undefined') {
  window.COMPANY_DATA = COMPANY_DATA;
  window.SITE_CONFIG = COMPANY_DATA; // Backwards compatibility alias
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPANY_DATA;
}
