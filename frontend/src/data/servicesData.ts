// data/servicesData.ts
export interface ServiceItem {
  label: string;
  href: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "Social Media",
    items: [
      { label: "Facebook Marketing", href: "/services/social/facebook" },
      { label: "Instagram Marketing", href: "/services/social/instagram" },
      { label: "Influencer Marketing", href: "/services/social/influencer" },
     ],
  },
  {
    title: "SEO",
    items: [
      { label: "SEO Service", href: "/services/seo" },
      ],
  },
  {
    title: "Software Development",
    items: [
      { label: "Website Development", href: "/services/dev/web" },
      { label: "Mobile App Development", href: "/services/dev/mobile" },
      { label: "Software Solutions", href: "/services/dev/software" },
      ],
  },
  {
    title: "Graphic Design",
    items: [
      { label: "Logo Design", href: "/services/design/logo" },
      { label: "Branding Kit", href: "/services/design/branding" },
       ],
  },
];
