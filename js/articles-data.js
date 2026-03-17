// Articles data for The Collector's Workshop
const articlesData = [
  {
    slug: "vintage-typewriter-collecting",
    title: "Vintage Typewriter Collecting",
    subtitle: "A Guide to Identification, Value, and Care",
    hub: "Collector Guides",
    topic: "Typewriters",
    excerpt: "Discover the world of vintage typewriters, from early Remingtons to mid-century Smith-Coronas. Learn to identify rare models and understand what makes a machine valuable to collectors.",
    keywords: ["typewriter", "vintage", "collecting", "identification", "value"]
  },
  {
    slug: "vintage-camera-collecting",
    title: "Vintage Camera Collecting",
    subtitle: "From Leica to Polaroid: A Collector's Journey",
    hub: "Collector Guides",
    topic: "Cameras",
    excerpt: "Explore the fascinating world of vintage camera collecting. From German precision engineering to Japanese innovation, learn what makes certain cameras highly sought after.",
    keywords: ["camera", "leica", "vintage", "collecting", "photography"],
    bookASIN: "B0GPMV2G35",
    bookTitle: "Leica Camera Collecting",
    bookLink: "https://www.amazon.com/dp/B0GPMV2G35"
  },
  {
    slug: "singer-featherweight-mastery",
    title: "Singer Featherweight Mastery",
    subtitle: "Restoration, Maintenance & Quilter-Ready Performance",
    hub: "Repair & Restoration",
    topic: "Sewing Machines",
    excerpt: "The Singer Featherweight 221 is the most beloved sewing machine ever made. Learn to restore, maintain, and optimize these vintage treasures for modern quilting and sewing.",
    keywords: ["sewing machine", "singer", "featherweight", "restoration", "quilting"],
    bookASIN: "B0FJMM4YF6",
    bookTitle: "Singer Featherweight Mastery",
    bookLink: "https://www.amazon.com/dp/B0FJMM4YF6"
  },
  {
    slug: "commodore-64-computers",
    title: "Commodore 64 Computers",
    subtitle: "Repair, Service, and Collector Guide",
    hub: "Retro Tech",
    topic: "Vintage Computers",
    excerpt: "The Commodore 64 remains the best-selling computer of all time. Learn to repair common issues, service keyboards, and build a collection of this legendary 8-bit machine.",
    keywords: ["commodore 64", "retro computing", "repair", "vintage computer", "8-bit"],
    bookASIN: "B0GSQW249W",
    bookTitle: "Commodore 64 Computers",
    bookLink: "https://www.amazon.com/dp/B0GSQW249W"
  },
  {
    slug: "antique-telephones-guide",
    title: "Antique Telephones",
    subtitle: "History, Identification, and Collecting",
    hub: "Collector Guides",
    topic: "Telephones",
    excerpt: "From candlestick phones to rotary dial classics, antique telephones represent a fascinating intersection of technology and design. Learn to identify and value these conversation pieces.",
    keywords: ["telephone", "antique", "rotary", "candlestick", "collecting"]
  },
  {
    slug: "antique-clocks-guide",
    title: "Antique Clocks",
    subtitle: "A Collector's Guide to Timepieces",
    hub: "Collector Guides",
    topic: "Clocks",
    excerpt: "Antique clocks combine mechanical ingenuity with artistic craftsmanship. Discover the major types, from grandfather clocks to carriage clocks, and learn what makes them tick.",
    keywords: ["clock", "antique", "timepiece", "collecting", "mechanical"]
  },
  {
    slug: "railroad-lanterns-guide",
    title: "Railroad Lanterns",
    subtitle: "Dietz and Adlake Identification Guide",
    hub: "Collector Guides",
    topic: "Railroad Lanterns",
    excerpt: "Railroad lanterns are iconic pieces of American history. Learn to identify Dietz and Adlake models, understand markings, and build a collection of these luminous artifacts.",
    keywords: ["railroad", "lantern", "dietz", "adlake", "collecting"],
    bookASIN: "B0GRMBV6VH",
    bookTitle: "Railroad Lanterns",
    bookLink: "https://www.amazon.com/dp/B0GRMBV6VH"
  },
  {
    slug: "cast-iron-toys-hubley-guide",
    title: "Cast Iron Toys of Hubley",
    subtitle: "Identification and Value Guide",
    hub: "Collector Guides",
    topic: "Cast Iron Toys",
    excerpt: "Hubley cast iron toys represent the golden age of American toy manufacturing. Learn to identify rare models, understand variations, and appreciate these durable playthings.",
    keywords: ["cast iron", "toys", "hubley", "vintage toys", "collecting"],
    bookASIN: "B0GQT99DZX",
    bookTitle: "Cast Iron Toys of Hubley",
    bookLink: "https://www.amazon.com/dp/B0GQT99DZX"
  },
  {
    slug: "vintage-board-games",
    title: "Vintage Board Game Collecting",
    subtitle: "Identification, Variations, and Value",
    hub: "Collector Guides",
    topic: "Board Games",
    excerpt: "From early Monopoly sets to obscure 1970s titles, vintage board games are a growing collector category. Learn what to look for and how to spot valuable variations.",
    keywords: ["board games", "vintage", "monopoly", "collecting", "value"],
    bookASIN: "B0GSQS8MJR",
    bookTitle: "Vintage Board Game Collecting",
    bookLink: "https://www.amazon.com/dp/B0GSQS8MJR"
  },
  {
    slug: "antique-fishing-reels",
    title: "Antique Fishing Reels",
    subtitle: "Restoration and Collector Value Guide",
    hub: "Repair & Restoration",
    topic: "Fishing Reels",
    excerpt: "Antique fishing reels combine sporting history with mechanical precision. Learn to identify makers, restore vintage reels, and understand the collector market.",
    keywords: ["fishing reel", "antique", "restoration", "meek", "talbot", "collecting"],
    bookASIN: "B0GSQKDDVH",
    bookTitle: "Antique Fishing Reels",
    bookLink: "https://www.amazon.com/dp/B0GSQKDDVH"
  },
  {
    slug: "game-boy-mastery",
    title: "Game Boy Mastery",
    subtitle: "Repair, Recap & IPS Upgrades",
    hub: "Retro Tech",
    topic: "Game Boy",
    excerpt: "Nintendo's Game Boy defined portable gaming. Learn to repair common issues, replace capacitors, and install modern IPS screens for the ultimate retro handheld experience.",
    keywords: ["game boy", "repair", "nintendo", "retro gaming", "modding"],
    bookASIN: "B0FQJZD6KT",
    bookTitle: "Game Boy Mastery",
    bookLink: "https://www.amazon.com/dp/B0FQJZD6KT"
  },
  {
    slug: "retro-gaming-console-repair",
    title: "Retro Gaming Console Repair",
    subtitle: "Fix and Restore Classic Gaming Systems",
    hub: "Retro Tech",
    topic: "Console Repair",
    excerpt: "Learn to repair and restore classic gaming consoles. Fix common issues with NES, SNES, Sega, and other retro systems.",
    keywords: ["console repair", "retro gaming", "nes", "snes", "sega"]
  }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { articlesData };
}
