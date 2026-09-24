export type ResourceType = "Video" | "Graphics" | "Training Guide" | "Social Media";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  audience: string;
  length: string;
  details: string;
  color: string;
};

export const resourceTypes: ResourceType[] = ["Video", "Graphics", "Training Guide", "Social Media"];

export const resources: Resource[] = [
  { slug: "volunteer-welcome-video", title: "Volunteer Welcome Video", description: "Warm, practical introduction for new volunteers joining community program.", type: "Video", audience: "Volunteer coordinators", length: "7 min video", details: "Use during orientation or send before volunteer's first shift. Covers expectations, hospitality, and how small acts of service build trust.", color: "bg-sky-100 text-sky-800" },
  { slug: "neighborhood-outreach-graphics", title: "Neighborhood Outreach Graphics Pack", description: "Sample graphics for food drives, open houses, and local events.", type: "Graphics", audience: "Church and nonprofit teams", length: "12 graphics", details: "Starter collection of square posts, flyers, and story layouts. Each piece leaves open space for organization name, date, and location.", color: "bg-amber-100 text-amber-800" },
  { slug: "stories-that-build-trust", title: "Stories That Build Trust", description: "Guide for gathering and sharing community stories with care and consent.", type: "Training Guide", audience: "Communications teams", length: "18-page guide", details: "Learn how to prepare interviews, gain meaningful consent, write with dignity, and invite people to review their own story before sharing.", color: "bg-emerald-100 text-emerald-800" },
  { slug: "kindness-in-action-toolkit", title: "Kindness in Action Campaign Toolkit", description: "Ready-to-adapt social posts for month of practical neighbor care.", type: "Social Media", audience: "Small communications teams", length: "30 post ideas", details: "Plan a month-long campaign around everyday service. Includes captions, image prompts, and weekly themes for Instagram, Facebook, and newsletters.", color: "bg-violet-100 text-violet-800" },
  { slug: "community-meal-promo-video", title: "Community Meal Promo Video", description: "Short invitation video for recurring meal, pantry, or gathering space.", type: "Video", audience: "Community organizers", length: "45 sec video", details: "Sample script and video outline help teams explain who is welcome, what to expect, and how guests can take part without pressure.", color: "bg-rose-100 text-rose-800" },
  { slug: "listening-circle-kit", title: "Listening Circle Facilitation Kit", description: "Prompts and simple materials for constructive community conversation.", type: "Training Guide", audience: "Facilitators and leaders", length: "10-page guide", details: "Run 60-minute listening session with confidence. Includes room setup, opening language, discussion prompts, and follow-up ideas.", color: "bg-teal-100 text-teal-800" },
  { slug: "summer-program-templates", title: "Summer Program Templates", description: "Bright, straightforward graphics for camps, clubs, and family activities.", type: "Graphics", audience: "Program coordinators", length: "8 templates", details: "Example templates promote summer activities in print or online. They leave room for essential details and quick local adaptation.", color: "bg-orange-100 text-orange-800" },
  { slug: "give-your-time-reels", title: "Give Your Time Reels Series", description: "Five short video concepts spotlighting volunteers and inviting people in.", type: "Video", audience: "Volunteer coordinators", length: "5 short videos", details: "Low-pressure series of short-form video concepts. Each introduces volunteer, shows real task, and gives one clear invitation to get involved.", color: "bg-indigo-100 text-indigo-800" },
  { slug: "event-countdown-posts", title: "Event Countdown Post Set", description: "Week of social posts helping people remember and prepare for event.", type: "Social Media", audience: "Event teams", length: "7 post templates", details: "Practical countdown prompts for upcoming events. Use them to answer common questions about time, place, transport, accessibility, and what to bring.", color: "bg-fuchsia-100 text-fuchsia-800" }
];
