export const categories = [
  "All events",
  "Music",
  "Technology",
  "Business",
  "Arts",
  "Food",
  "Wellness",
];

export const events = [
  {
    id: 1,
    title: "The Indie Music Festival",
    category: "Music",
    date: "2026-12-06",
    time: "5:30 PM",
    venue: "Phoenix Marketcity",
    city: "Chennai",
    price: 799,
    oldPrice: 999,
    seats: 180,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=85",
    description:
      "An electric evening of independent music, fresh sounds, and unforgettable live performances. Discover emerging artists and enjoy a festival atmosphere with great food and community.",
  },
  {
    id: 2,
    title: "Future of AI Summit 2026",
    category: "Technology",
    date: "2026-12-12",
    time: "9:00 AM",
    venue: "ITC Grand Chola",
    city: "Chennai",
    price: 1499,
    oldPrice: 1999,
    seats: 95,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    description:
      "Meet builders, founders, and technology leaders for a full day of practical talks on artificial intelligence, product innovation, and the future of work.",
  },
  {
    id: 3,
    title: "Creative Minds Design Meetup",
    category: "Arts",
    date: "2026-12-19",
    time: "11:00 AM",
    venue: "The Design Studio",
    city: "Coimbatore",
    price: 499,
    oldPrice: 699,
    seats: 65,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
    description:
      "A relaxed creative gathering for designers, illustrators, and curious minds. Share ideas, explore new techniques, and leave with fresh inspiration.",
  },
  {
    id: 4,
    title: "Startup Founders Connect",
    category: "Business",
    date: "2027-01-09",
    time: "10:00 AM",
    venue: "Taj Coromandel",
    city: "Chennai",
    price: 999,
    oldPrice: 1299,
    seats: 120,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85",
    description:
      "Build meaningful connections with entrepreneurs, investors, and operators. Expect honest conversations, focused networking, and useful insights.",
  },
  {
    id: 5,
    title: "Taste of South India",
    category: "Food",
    date: "2027-01-16",
    time: "12:00 PM",
    venue: "Codissia Trade Fair Complex",
    city: "Coimbatore",
    price: 349,
    oldPrice: 499,
    seats: 240,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85",
    description:
      "Celebrate regional flavours with local chefs, signature dishes, live demonstrations, and food stories from across South India.",
  },
  {
    id: 6,
    title: "Mindful Morning Retreat",
    category: "Wellness",
    date: "2027-01-24",
    time: "6:30 AM",
    venue: "The Residency Towers",
    city: "Salem",
    price: 599,
    oldPrice: 799,
    seats: 48,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
    description:
      "Reset your routine with guided yoga, mindful breathing, and a calming wellness session designed to help you begin the day with intention.",
  },
];

export const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
export const formatPrice = (price) =>
  price === 0 ? "Free" : `₹${Number(price).toLocaleString("en-IN")}`;
