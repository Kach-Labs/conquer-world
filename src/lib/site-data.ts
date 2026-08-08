// Central content source for the CAR website.
// Devotionals, events, and testimonies are seeded here for the first version.
// In the next pass these lists will be replaced by a Google Sheets service.

export const ministry = {
  name: "ConquerWorld Apostolic Renaissance",
  short: "CAR",
  tagline: "New Era. New Wave. Same Fire.",
  mission: "Unleashing the Fire, Impacting Nations, Fulfilling the Great Commission.",
  vision: "A world set ablaze, nations impacted, the Great Commission fulfilled.",
  purpose: "Ignite and spread the revival fire.",
  address: "Laroo Division, P.O. Box 361589, Gulu, Uganda",
  phone: "+256 792 110 047",
  emails: {
    info: "info@conquerworldapostolicrenaissance.org",
    prayer: "prayer@conquerworldapostolicrenaissance.org",
    pastor: "pastor@conquerworldapostolicrenaissance.org",
    partnerships: "partnerships@conquerworldapostolicrenaissance.org",
    founder: "jwiseman@conquerworldapostolicrenaissance.org",
  },
  give: {
    onlineUrl: "https://conquerworld.org/give",
    mtn: { code: "*165*3#", merchant: "671873" },
    airtel: { code: "*185*9#", merchant: "4405770" },
    bank: {
      name: "Stanbic Bank",
      branch: "Gulu Branch",
      account: "ConquerWorld Apostolic Renaissance",
      ugx: "0000000000000",
      usd: "0000000000000",
    },
  },
  whatsappChannel: "https://whatsapp.com/channel/",
};

export const coreValues = [
  { title: "Word-Centered", desc: "Rooted and established in the eternal truth of Scripture." },
  { title: "Spirit-Led", desc: "Yielded daily to the leading and power of the Holy Spirit." },
  { title: "Kingdom-Driven", desc: "Advancing the Kingdom of God above every earthly agenda." },
  { title: "Global Reach", desc: "Carrying the fire of revival to every nation and generation." },
  { title: "Excellence", desc: "Honoring God through excellence in worship, work, and witness." },
];

export const objectives = [
  {
    title: "Ignite the Nations",
    scripture: "Luke 12:49",
    desc: "Unleash the fire of revival, sparking a global wave that transforms lives, nations, and generations.",
  },
  {
    title: "Kingdom Influencers",
    scripture: "Matthew 28:19–20 · Mark 16:15",
    desc: "Raise up a generation of leaders, prophetic voices, and influencers to impact their world.",
  },
];

export const programs = [
  {
    slug: "conferences",
    title: "ConquerWorld Conferences",
    icon: "flame",
    summary:
      "International and regional gatherings — online and offline — designed to inspire, equip, and empower believers for effective ministry.",
  },
  {
    slug: "online-courses",
    title: "Online Courses & Resources",
    icon: "book",
    summary:
      "Dynamic training programs and digital resources that empower believers in evangelism, discipleship, and community transformation.",
  },
  {
    slug: "devotional",
    title: "Youth for Jesus Devotional",
    icon: "sun",
    summary:
      "A daily guide to spiritual growth, empowerment, and transformation — nurturing a generation on fire for God.",
  },
  {
    slug: "global-outreach",
    title: "Global Outreach",
    icon: "globe",
    summary:
      "Partnering with local churches, ministries, and organizations to reach the unreached across nations.",
  },
  {
    slug: "market-evangelism",
    title: "Market & Street Storming",
    icon: "megaphone",
    summary:
      "Taking the message of salvation into markets, streets, and public spaces — Mark 16:15 in motion.",
  },
  {
    slug: "door-to-door",
    title: "Door-to-Door Ministry",
    icon: "home",
    summary:
      "Visiting homes to share the Gospel, offer prayer, and extend the love of Christ to every household.",
  },
  {
    slug: "campus",
    title: "Campus Outreach",
    icon: "graduation-cap",
    summary:
      "On-campus evangelism, Bible studies, and discipleship groups raising a generation grounded in truth.",
  },
  {
    slug: "radio",
    title: "Radio Ministry",
    icon: "radio",
    summary:
      "Amplifying God's Word across borders — bringing salvation, hope, and transformation to countless listeners.",
  },
  {
    slug: "transit",
    title: "Bus & Taxi Evangelism",
    icon: "bus",
    summary:
      "Ministering to commuters in buses, taxis, and boda-bodas — turning ordinary journeys into divine encounters.",
  },
];

// -------- Devotionals (seeded sample content) --------

export interface Devotional {
  id: string;
  date: string; // ISO
  title: string;
  scripture: string;
  author: string;
  image: string;
  summary: string;
  body: string;
  whatsapp?: string;
}

const today = new Date();
const dayOffset = (n: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
};

export const devotionals: Devotional[] = [
  {
    id: "d-001",
    date: dayOffset(0),
    title: "Living From Victory, Not For Victory",
    scripture: "John 16:33",
    author: "Apostle John Wiseman",
    image: "hero",
    summary:
      "Jesus has already overcome. We do not fight for victory — we live from the victory He secured.",
    body:
      "The finished work of the cross is not a distant idea. It is the ground you stand on today. When Jesus said, \"I have overcome the world,\" He deprived the world of its power to harm you and conquered it for you.\n\nStop striving to earn what you have already been given. Rise from the position of a victor. Speak like a conqueror. Walk like a joint-heir with Christ. The same fire that swept through the Upper Room burns in you today — not so you would survive, but so you would set your world ablaze.\n\nToday, refuse every voice of defeat. You are not fighting for victory. You are living from it. Hallelujah.",
    whatsapp: ministry.whatsappChannel,
  },
  {
    id: "d-002",
    date: dayOffset(1),
    title: "The Fire That Cannot Be Contained",
    scripture: "Luke 12:49",
    author: "Apostle John Wiseman",
    image: "flame",
    summary:
      "Jesus said, \"I came to send fire on the earth.\" That fire is looking for a life to burn through.",
    body:
      "Fire is never quiet. Fire changes everything it touches. When the Holy Spirit fell on the day of Pentecost, tongues of fire rested on each of them — and history was rewritten.\n\nYou were never meant to be lukewarm. You were called to burn. The world is not waiting for another polished performance; it is waiting for a generation of ordinary believers set on fire by an extraordinary God.\n\nLet the fire fall on you again today. Let it burn away compromise. Let it ignite prayer. Let it awaken your calling. And then — go. The nations are waiting for the flame you carry.",
    whatsapp: ministry.whatsappChannel,
  },
  {
    id: "d-003",
    date: dayOffset(2),
    title: "Sent, Not Sitting",
    scripture: "Mark 16:15",
    author: "Apostle John Wiseman",
    image: "outreach",
    summary:
      "The Great Commission was never a suggestion. Every believer is a sent one.",
    body:
      "\"Go into all the world and preach the gospel to every creature.\" That word — go — was not addressed to a special class of super-Christians. It was addressed to every disciple, in every generation, in every place.\n\nYour campus is a mission field. Your market is a mission field. Your bus ride, your neighborhood, your family group chat — all mission fields. You do not need a title to obey. You need only a willing heart.\n\nWho is one person the Lord is putting on your heart today? Text them. Sit with them. Pray for them. Share Jesus with them. Heaven is watching.",
    whatsapp: ministry.whatsappChannel,
  },
];

const pastDate = (n: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString();
};

// -------- Gallery (real ministry photos) --------


import outreach1 from "@/assets/outreach1.jpg.asset.json";
import outreach2 from "@/assets/outreach2.jpg.asset.json";
import outreach3 from "@/assets/outreach3.jpg.asset.json";
import outreach4 from "@/assets/outreach4.jpg.asset.json";
import outreach5 from "@/assets/outreach5.jpg.asset.json";

export type GalleryCategory =
  | "Street Evangelism"
  | "Village Outreach"
  | "Teaching"
  | "Team";

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  context: string;
  category: GalleryCategory;
  alt: string;
  orientation: "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g-002",
    url: outreach2.url,
    caption: "Open-air teaching under the mango tree",
    context: "Community gathering, Gulu",
    category: "Teaching",
    alt: "Preacher teaching a seated group of youth and women outdoors under a large tree",
    orientation: "landscape",
  },
  {
    id: "g-001",
    url: outreach1.url,
    caption: "Preaching at the fuel station junction",
    context: "Street storming, Gulu town",
    category: "Street Evangelism",
    alt: "Young evangelist preaching aloud beside a busy fuel station on a town road",
    orientation: "portrait",
  },
  {
    id: "g-003",
    url: outreach3.url,
    caption: "The Word among the elders",
    context: "Village outreach, northern Uganda",
    category: "Village Outreach",
    alt: "Evangelist holding a microphone preaching to seated village elders under trees",
    orientation: "portrait",
  },
  {
    id: "g-004",
    url: outreach4.url,
    caption: "Tracts at the traffic lights",
    context: "City junction outreach",
    category: "Street Evangelism",
    alt: "Evangelist in a suit handing out gospel tracts at a city road junction",
    orientation: "portrait",
  },
  {
    id: "g-005",
    url: outreach5.url,
    caption: "The outreach team, ready to go",
    context: "Market storming team, Gulu",
    category: "Team",
    alt: "Group of young outreach volunteers in reflector vests standing along a town street",
    orientation: "landscape",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Street Evangelism",
  "Village Outreach",
  "Teaching",
  "Team",
];


// -------- Testimonies --------

export interface Testimony {
  id: string;
  name: string;
  location?: string;
  text: string;
  date: string;
}

export const testimonies: Testimony[] = [
  {
    id: "t-001",
    name: "Grace A.",
    location: "Kampala",
    text:
      "The Youth for Jesus Devotional pulled me out of a season of depression. Every morning felt like Jesus was speaking directly to me. Today I lead a small Bible study in my hostel.",
    date: pastDate(14).slice(0, 10),
  },
  {
    id: "t-002",
    name: "Emmanuel O.",
    location: "Gulu",
    text:
      "I met Apostle Wiseman on a taxi ride. He shared Christ with me and prayed. That day I gave my life to Jesus. My whole household has since come to faith.",
    date: pastDate(40).slice(0, 10),
  },
  {
    id: "t-003",
    name: "Sarah N.",
    location: "Nairobi",
    text:
      "I submitted a prayer request believing God for my marriage. Within weeks, my husband — who had walked away from the faith — returned to the Lord. Glory to God!",
    date: pastDate(72).slice(0, 10),
  },
  {
    id: "t-004",
    name: "Peter K.",
    location: "Lira",
    text:
      "Through CAR's campus outreach I discovered I was called to preach. I now serve on the evangelism team. My life will never be the same.",
    date: pastDate(110).slice(0, 10),
  },
];

export const partnerWays = [
  { title: "Prayer Support", desc: "Stand with us in intercession for nations and ministry impact." },
  { title: "Financial Giving", desc: "Fuel outreach, discipleship, and media missions across the earth." },
  { title: "Mission Partnerships", desc: "Join us in organizing conferences, crusades, and outreach missions." },
  { title: "Resource & Media Support", desc: "Help us produce and distribute transformative Christian content worldwide." },
];
