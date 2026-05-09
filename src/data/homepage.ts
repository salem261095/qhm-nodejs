export const navItems = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Variant 1 — Cinematic", href: "/" },
      { label: "Variant 2 — Editorial", href: "/home-2" },
      { label: "Variant 3 - Intelligence Hub", href: "/home-3" },
    ],
  },
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const headerCta = {
  label: "Contact Us",
  href: "/contact",
};

export const heroCtas = [
  {
    label: "Request a Consultation",
    href: "/contact",
    variant: "primary",
  },
  {
    label: "View Our Expertise",
    href: "/expertise",
    variant: "secondary",
  },
];

export const managingPartnerCta = {
  label: "Meet Dr. Qaisar",
  href: "/team/dr-qaisar-h-metawea",
};

export const coreCompetencies = [
  {
    number: "01.",
    title: "Regulatory Certainty",
    description:
      "We guide corporates through Saudi Arabia's evolving legal framework with clarity and strategic foresight, ensuring compliance while protecting commercial interests.",
  },
  {
    number: "02.",
    title: "Transactional Risk Management",
    description:
      "From structuring investments to negotiating cross-border agreements, we mitigate legal exposure and protect enterprise value at every stage.",
  },
  {
    number: "03.",
    title: "Government & Regulatory Engagement",
    description:
      "We advise and represent clients before key Saudi authorities, including ZATCA and dispute resolution committees, leveraging deep institutional knowledge.",
  },
  {
    number: "04.",
    title: "Dispute Avoidance & Resolution",
    description:
      "We provide litigation strategy, tax dispute representation, and arbitration support for complex corporate disputes.",
  },
];

export const practiceAreas = [
  {
    title: "Corporate & Commercial",
    description: "Structuring complex entities and cross-border transactions.",
    href: "/expertise/corporate-commercial",
  },
  {
    title: "Joint Ventures & FDI",
    description: "Navigating foreign investment laws and strategic partnerships.",
    href: "/expertise/joint-ventures-fdi",
  },
  {
    title: "Regulatory Advisory",
    description: "Compliance with Capital Market Authority and gov regulations.",
    href: "/expertise/regulatory-advisory",
  },
  {
    title: "Dispute Resolution",
    description: "Commercial arbitration and high-stakes litigation.",
    href: "/expertise/dispute-resolution",
  },
  {
    title: "Employment & Labor",
    description: "Workforce structuring and executive contracts.",
    href: "/expertise/employment-labor",
  },
  {
    title: "IP & Technology",
    description: "Protecting intellectual assets and data privacy.",
    href: "/expertise/ip-technology",
  },
  {
    title: "Tax & Zakat",
    description: "Corporate tax planning and disputes.",
    href: "/expertise/tax-zakat",
  },
  {
    title: "Sector Advisory",
    description: "Specialized counsel for Energy, Health, and Real Estate.",
    href: "/expertise/sector-advisory",
  },
];

export const industryFocus = [
  {
    number: "01.",
    title: "Energy & Infrastructure",
    icon: "zap",
    href: "/sectors/energy-infrastructure",
  },
  {
    number: "02.",
    title: "Healthcare & Pharmaceuticals",
    icon: "health",
    href: "/sectors/healthcare-pharmaceuticals",
  },
  {
    number: "03.",
    title: "Aviation & Maritime",
    icon: "plane",
    href: "/sectors/aviation-maritime",
  },
  {
    number: "04.",
    title: "Real Estate & Development",
    icon: "building",
    href: "/sectors/real-estate-development",
  },
  {
    number: "05.",
    title: "IT & Telecom",
    icon: "chip",
    href: "/sectors/it-telecom",
  },
];

export const representativeMandates = [
  {
    category: "Market Entry & Licensing",
    title: "Advised a global European fintech provider on their Saudi market entry.",
    description:
      "Structured corporate governance and ensured full regulatory compliance with Saudi Central Bank (SAMA) frameworks for operational licensing.",
  },
  {
    category: "Corporate M&A",
    title: "Acted as lead local counsel for a multinational manufacturing conglomerate.",
    description:
      "Structured and executed a $150M cross-border joint venture in the Eastern Province, mitigating local regulatory and antitrust exposure.",
  },
  {
    category: "Dispute Resolution",
    title: "Successfully represented a leading regional logistics enterprise.",
    description:
      "Defended the client in a complex, multi-million Riyal tax dispute before the Zakat, Tax and Customs Authority (ZATCA), securing a favorable resolution.",
  },
  {
    category: "Regulatory Advisory",
    title: "Advised the board of a publicly listed regional healthcare provider.",
    description:
      "Delivered strategic counsel on corporate restructuring and mandatory compliance transition under the new Saudi Companies Law.",
  },
];

export const corporateEnquiryFields = [
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "e.g. Acme Corp",
    required: true,
  },
  {
    name: "industrySector",
    label: "Industry Sector",
    type: "select",
    placeholder: "Choose Sector...",
    required: true,
    options: [
      "Energy & Infrastructure",
      "Healthcare & Pharmaceuticals",
      "Aviation & Maritime",
      "Real Estate & Development",
      "IT & Telecom",
      "Financial Services",
      "Manufacturing",
      "Other",
    ],
  },
  {
    name: "contactName",
    label: "Contact Name",
    type: "text",
    placeholder: "Full Name",
    required: true,
  },
  {
    name: "role",
    label: "Role / Job Title",
    type: "text",
    placeholder: "e.g. General Counsel",
    required: false,
  },
  {
    name: "email",
    label: "Corporate Email",
    type: "email",
    placeholder: "name@company.com",
    required: true,
  },
  {
    name: "phone",
    label: "Direct Line / Mobile",
    type: "tel",
    placeholder: "+966 5X XXX XXXX",
    required: false,
  },
  {
    name: "matterType",
    label: "Matter Type",
    type: "select",
    placeholder: "Corporate / Commercial Mandate",
    required: true,
    options: [
      "Corporate / Commercial Mandate",
      "Market Entry / Licensing",
      "Joint Venture / FDI",
      "Regulatory Advisory",
      "Dispute Resolution",
      "Tax & Zakat",
      "Employment & Labor",
      "IP & Technology",
      "Other",
    ],
  },
];

export const newsletter = {
  eyebrow: "Newsletter",
  heading: "Strategic Insights for\nGlobal Counsel.",
  description:
    "Regulatory updates and market-entry analysis delivered by our partner-led team in Riyadh.",
  placeholder: "corporate@email.com",
  submitLabel: "Subscribe",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "X / Twitter",
    href: "#",
  },
];

export const jeddahOffice = {
  label: "Jeddah Headquarters",
  address: [
    "The Headquarter Business Park",
    "Al-Shati, Corniche, 17th Floor Unit 1705",
    "P.O Box 9420, Jeddah 21413",
    "Kingdom of Saudi Arabia",
  ],
  mapLabel: "View on Map",
  mapHref: "#",
};

export const riyadhOffice = {
  label: "Riyadh Office",
  address: [
    "Verdun Tower",
    "King Fahad Rd, Al Olaya District",
    "Unit 604, Riyadh 12212",
    "Saudi Arabia",
  ],
  mapLabel: "View on Map",
  mapHref: "#",
};

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "The Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Legal Notices", href: "/legal-notices" },
];

export const homepageContent = {
  navItems,
  headerCta,
  hero: {
    eyebrow: "Corporate Strategy & Regulatory Compliance",
    heading: "Saudi Depth.\nGlobal Confidence.",
    subheading: "Independent. Saudi-based. Internationally experienced.",
    ctas: heroCtas,
  },
  managingPartner: {
    name: "Dr. Qaisar H. Metawea",
    role: "Managing Partner",
    bio: "Qaisar Hamed Metawea Law Firm (QHM) is a Saudi-based corporate law firm advising multinational companies, financial institutions, and regional headquarters on market entry, regulatory compliance, high-value transactions, tax disputes, and complex commercial matters across the Kingdom.",
    extendedBio:
      "We deliver partner-led, commercially driven legal solutions designed to provide regulatory certainty, mitigate transactional risk, and accelerate speed to market.",
    cta: managingPartnerCta,
  },
  coreCompetencies,
  practiceAreas,
  industryFocus,
  representativeMandates,
  corporateEnquiryFields,
  newsletter,
  footer: {
    firmName: "Qaisar H Metawea Law Firm.",
    description:
      "QHM advises multinational corporations, financial institutions, government-related entities, and leading international law firms on complex regulatory, transactional, and tax matters in Saudi Arabia, delivering seamless local execution aligned with global standards.",
    offices: [jeddahOffice, riyadhOffice],
    links: footerLinks,
    socialLinks,
  },
};
