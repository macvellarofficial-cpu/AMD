import { FAQItem, Product, Service, ProcedureStep, ExportDoc, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'gold-bars',
    name: 'Afrimex Gold Bullion Bars',
    description: 'Investment-grade cast and minted gold bars, refined to the highest international standard of purity. Sourced from verified conflict-free ethical mines across East Africa.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80',
    specs: {
      purity: '99.99% (24 Karat Pure Gold) or 96% Standard Bullion',
      weight: '1 kg, 12.5 kg (Good Delivery), and custom weights from 100g upwards',
      origin: 'Uganda & verified regional cooperative partner mines',
      form: 'Minted or hand-cast physical bars bearing the official Afrimex assay stamp',
      packaging: 'Individually serialized tamper-evident security packaging with certificates'
    },
    features: [
      'Individually numbered for full traceability',
      'Assayed by the Ugandan Directorate of Geological Survey and Mines',
      'Accompanied by full export documentation & origin certificates',
      'Suitable for central bank reserves and institutional investors'
    ]
  },
  {
    id: 'gold-nuggets',
    name: 'Natural Premium Gold Nuggets',
    description: 'High-purity alluvial gold nuggets collected from rich riverbeds and geological formations in Uganda. Favored by collectors and specialty jewelers for their raw natural aesthetic.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80',
    specs: {
      purity: 'Typically ranges from 22 Karat to 23 Karat (92% - 97% purity)',
      weight: 'Ranging from 5g specimen pieces to substantial 500g+ master collector pieces',
      origin: 'Kigezi and Karamoja mining districts, Uganda',
      form: 'Raw, unrefined natural geological structures with unique alluvial formations',
      packaging: 'Secured in heavy-duty airtight display cases with origin certification'
    },
    features: [
      '100% natural, unaltered raw formations',
      'Ethically mined by licensed artisanal miner cooperatives',
      'Full certificate of natural origin and ownership provided',
      'Highly sought after for investment specimens and custom artisanal jewelry'
    ]
  },
  {
    id: 'gold-dust',
    name: 'Unrefined Alluvial Gold Dust',
    description: 'High-grade raw gold dust and auriferous concentrates collected from primary artisanal washings. Fully assayed and prepared under safe laboratory conditions prior to smelting and refinement.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=600&q=80',
    specs: {
      purity: 'Average purity of 92.5% to 94.8% (unrefined state)',
      weight: 'Shipped in bulk quantities starting from 5 kilograms to monthly allocations of 100+ kg',
      origin: 'Licensed alluvial concessions in Uganda',
      form: 'Fine-grain unrefined metallic dust and miniature flakes',
      packaging: 'Double-sealed, heavy-gauge security bags packed in steel transport canisters'
    },
    features: [
      'Sourced directly from primary washing operations',
      'Excellent pricing yield for international refineries and mints',
      'Exported in compliance with full OECD Sourcing Guidelines',
      'Accompanied by preliminary assay certificates from certified government labs'
    ]
  },
  {
    id: 'silver-metals',
    name: 'Refined Industrial & Investment Silver',
    description: 'High-purity silver bars and granules obtained as a natural co-product of gold refining, processed to international standards for electronic, jewelry, and investment sectors.',
    image: 'https://images.unsplash.com/photo-1515564895181-37fa21a0e3a5?auto=format&fit=crop&w=600&q=80',
    specs: {
      purity: '99.9% Pure Silver (999 Fine Silver)',
      weight: '1 kg minted bars and 15 kg industrial bars',
      origin: 'Ugandan smelting operations and regional deposits',
      form: 'Refined silver bars or industrial casting granules',
      packaging: 'Sealed vacuum packs housed in industrial crates with assay validation'
    },
    features: [
      'Refined using advanced eco-friendly wet chemical methodologies',
      'Exceptional electrical conductivity and structural purity',
      'Backed by official tax clearances and international airway bills',
      'Flexible contract sizes to suit jewelry manufacturers'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'gold-sourcing',
    name: 'Ethical Gold Sourcing',
    description: 'We act as a direct, responsible gateway to Ugandan and East African gold. By partnering directly with vetted, licensed artisanal mining cooperatives, we supply conflict-free precious metals.',
    iconName: 'Pickaxe',
    features: [
      'Direct partnerships with artisanal miner cooperatives',
      'Rigorous OECD Due Diligence Guideline compliance',
      'On-site verification of supply chain legitimacy',
      'Zero-tolerance for child labor or conflict financing'
    ]
  },
  {
    id: 'gold-brokerage',
    name: 'Precious Metals Brokerage',
    description: 'Comprehensive trade execution, assisting international buyers, sovereign funds, and private offices in securing reliable physical gold allocations at favorable market indexes.',
    iconName: 'TrendingUp',
    features: [
      'LBMA and local spot index-linked pricing',
      'Secure transaction structures using regional and global escrow accounts',
      'Strategic market intelligence and timing reports',
      'End-to-end buyer representation and advisory'
    ]
  },
  {
    id: 'export-documentation',
    name: 'Export Documentation & Compliance',
    description: 'Navigating complex international mineral trade laws. We handle all Ugandan regulatory clearances, export permits, royalty settlements, and customs procedures.',
    iconName: 'FileCheck',
    features: [
      'Directorate of Geological Survey and Mines clearances',
      'Certificate of Origin and Tax Compliance documentation',
      'Full compliance with the Ugandan Mining Act and AML rules',
      'Secure preparation of Airway Bills and international customs filings'
    ]
  },
  {
    id: 'assaying-refining',
    name: 'Assaying & Refining Liaison',
    description: 'We host cutting-edge smelting, assay, and refining services. Our state-of-the-art laboratory utilizes fire assay and X-Ray Fluorescence (XRF) to ensure precise purity measurements.',
    iconName: 'FlaskConical',
    features: [
      'Accredited fire assay testing (the gold standard in precision)',
      'Instant non-destructive XRF spectrum scans',
      'Smelting and homogenizing of raw gold dust into high-purity bars',
      'Partnerships with world-class international LBMA accredited refineries'
    ]
  },
  {
    id: 'compliance-consulting',
    name: 'Compliance & Sourcing Advisory',
    description: 'Expert consultation on international precious metal compliance. We assist foreign companies in completing KYC, setting up secure trade protocols, and understanding local laws.',
    iconName: 'ShieldCheck',
    features: [
      'Comprehensive Know-Your-Customer (KYC) onboarding support',
      'Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) audits',
      'Advisory on local taxation, royalties, and mining laws',
      'Supplier verification and site-visit security coordination'
    ]
  },
  {
    id: 'logistics-escrow',
    name: 'Secure Logistics & Escrow Support',
    description: 'Highly secure armored transit and storage from mining districts to Kampala vaults, followed by fully insured international shipment with Brinks or Malca-Amit.',
    iconName: 'Lock',
    features: [
      'Fully insured armored vehicle transit inside Uganda',
      'Secure, multi-tier vault storage at high-security designated locations',
      'Escrow transaction routing via premier international banking institutions',
      'Global logistics integration with leading specialized secure carriers'
    ]
  }
];

export const PROCEDURE_STEPS: ProcedureStep[] = [
  {
    step: 1,
    title: 'Initial Inquiry & Consultation',
    description: 'The buyer contacts Afrimex Mineral Dealers Limited with their precise purchasing requirements, including quantities, purity levels, target schedules, and preferred delivery destinations.',
    iconName: 'MessageSquare',
    status: 'Step 1'
  },
  {
    step: 2,
    title: 'Letter of Intent (LOI) Submission',
    description: 'The buyer issues an official Letter of Intent (LOI) on their corporate letterhead, outlining their financial capabilities, corporate details, and explicit purchase specifications.',
    iconName: 'FileText',
    status: 'Step 2'
  },
  {
    step: 3,
    title: 'Full Corporate Offer (FCO)',
    description: 'Afrimex issues a formal Full Corporate Offer (FCO) stating current availability, pricing formulas, specific export procedures, and acceptable transactional terms.',
    iconName: 'ShieldAlert',
    status: 'Step 3'
  },
  {
    step: 4,
    title: 'Contract Negotiation & Signing',
    description: 'Both parties review, finalize, and sign a binding Sales and Purchase Agreement (SPA). The contract defines the legal framework, quality guarantees, delivery terms, and dispute mechanisms.',
    iconName: 'PenTool',
    status: 'Step 4'
  },
  {
    step: 5,
    title: 'Know Your Customer (KYC) Auditing',
    description: 'In compliance with international AML regulations, both companies complete strict KYC files. Afrimex verifies beneficial ownership and source of funds; the buyer verifies Afrimex’s licenses.',
    iconName: 'UserCheck',
    status: 'Step 5'
  },
  {
    step: 6,
    title: 'Buyer Visits Kampala, Uganda',
    description: 'The buyer or their authorized representative travels to Kampala to inspect the raw mineral consignments, witness the smelting process, and interact with the Afrimex executive team.',
    iconName: 'Plane',
    status: 'Step 6'
  },
  {
    step: 7,
    title: 'Smelting & Fire Assay',
    description: 'The gold is smelted to form homogeneous bars and assayed in our accredited laboratory. The buyer is present during the entire process, and split samples are certified by government authorities.',
    iconName: 'Flame',
    status: 'Step 7'
  },
  {
    step: 8,
    title: 'Payment Settlement',
    description: 'Upon confirmation of the final gold weight and purity through the joint assay report, the buyer settles the invoice via wire transfer or through a secure bank escrow structure.',
    iconName: 'DollarSign',
    status: 'Step 8'
  },
  {
    step: 9,
    title: 'Regulatory Clearances & Export',
    description: 'Afrimex settles all local export taxes and mineral royalties, obtains official export permits, and packages the gold into high-security boxes under government customs supervision.',
    iconName: 'FileCheck',
    status: 'Step 9'
  },
  {
    step: 10,
    title: 'Worldwide Delivery & Supply',
    description: 'The gold is dispatched via a secure, insured carrier (e.g., Brinks, Malca-Amit) to the buyer’s chosen international airport or refinery, initiating the monthly rollover contract.',
    iconName: 'Globe',
    status: 'Step 10'
  }
];

export const EXPORT_DOCUMENTS: ExportDoc[] = [
  {
    id: 'commercial-invoice',
    title: 'Commercial Invoice',
    shortDesc: 'The definitive statement of precious metal value, weight, and transaction parameters.',
    fullDesc: 'The Commercial Invoice is the legally binding billing document indicating the seller, buyer, description of the gold (gross weight, net weight, purity percentage, spot price, total due), and official Afrimex transaction reference numbers.',
    requiredFor: 'Customs Clearance & Escrow Settlement',
    authority: 'Afrimex Accounting & Corporate Office'
  },
  {
    id: 'assay-report',
    title: 'Official Assay Report',
    shortDesc: 'Certified testing proof detailing the gold purity and precise weight metric.',
    fullDesc: 'Issued by the accredited Directorate of Geological Survey and Mines lab (or an agreed independent assayer), this document certifies the exact fineness (typically 22K+ or 24K) and weight of each individual bar in the shipment.',
    requiredFor: 'Tax Settlement & Import Clearances',
    authority: 'Ugandan Directorate of Geological Survey & Mines'
  },
  {
    id: 'certificate-origin',
    title: 'Certificate of Origin',
    shortDesc: 'Official proof certifying the gold was responsibly sourced within Ugandan borders.',
    fullDesc: 'A crucial document verifying that the precious metals were extracted and processed within Uganda. This complies with international trade treaties and prevents the laundering of minerals across sovereign borders.',
    requiredFor: 'Importing Countries Customs & Tariff Verification',
    authority: 'Uganda Chamber of Commerce & Industry'
  },
  {
    id: 'certificate-ownership',
    title: 'Certificate of Ownership',
    shortDesc: 'Clear, unencumbered proof of clean title and legal ownership transfer.',
    fullDesc: 'This document certifies that the gold is 100% owned by Afrimex, is free from all liens, encumbrances, or third-party claims, and that the legal title transfers cleanly to the buyer upon final payment.',
    requiredFor: 'International Banking & Customs Risk Management',
    authority: 'Ministry of Energy and Mineral Development, Uganda'
  },
  {
    id: 'airway-bill',
    title: 'Airway Bill (AWB)',
    shortDesc: 'International air transit receipt indicating secure custody of shipping line.',
    fullDesc: 'The official air cargo contract issued by specialized carriers like Emirates, Turkish Cargo, or Brussels Airlines. It lists the routing, weight, and consignee instructions for high-security precious metal cargo.',
    requiredFor: 'Cargo Handover & Destination Port Ingress',
    authority: 'Designated Cargo Carrier (e.g., Emirates SkyCargo)'
  },
  {
    id: 'customs-clearance',
    title: 'Customs Declaration Forms',
    shortDesc: 'Official exit clearances and compliance statements issued by revenue authorities.',
    fullDesc: 'The official Single Administrative Document (SAD) or exit declaration, confirming that the cargo has been inspected, registered, and authorized for legal international departure by national border authorities.',
    requiredFor: 'Legal export and entry into international airspace',
    authority: 'Uganda Revenue Authority (URA) Customs Division'
  },
  {
    id: 'insurance-cert',
    title: 'All-Risk Marine/Air Cargo Insurance',
    shortDesc: 'Full transit value insurance shielding the shipment from port to port.',
    fullDesc: 'Comprehensive, high-value bullion insurance certificate providing 100% cover of the declared gold value against loss, theft, hijack, or transit damage from the Kampala vault to the destination airport vault.',
    requiredFor: 'Financial risk management and institutional compliance',
    authority: 'A-Rated Lloyds Underwriters (via Lloyd’s brokers)'
  },
  {
    id: 'movement-cert',
    title: 'EAC Movement Certificate',
    shortDesc: 'Regional preferential tariff document for East African Community borders.',
    fullDesc: 'A specialized regional document certifying compliance with the East African Community (EAC) rules of origin, ensuring seamless transit and duty exemptions across regional logistical corridors.',
    requiredFor: 'Regional Transit & EAC Customs clearance',
    authority: 'East African Community Customs Union'
  },
  {
    id: 'tax-payment',
    title: 'Royalty & Export Tax Receipts',
    shortDesc: 'State-certified proof that all royalties and mining taxes have been paid in full.',
    fullDesc: 'Official receipts showing the payment of the statutory Ugandan mineral export levy and royalty (typically calculated as a percentage of the exported value), proving the shipment complies with all national fiscal laws.',
    requiredFor: 'Customs Release & Ministry Audits',
    authority: 'Uganda Revenue Authority & MEMD'
  },
  {
    id: 'export-permit',
    title: 'Precious Minerals Export Permit',
    shortDesc: 'The mandatory gold export license issued exclusively to licensed corporations.',
    fullDesc: 'The ultimate authorizing document issued on behalf of the Government of Uganda, certifying that Afrimex Mineral Dealers Limited is fully licensed to export precious minerals and that this specific shipment is approved.',
    requiredFor: 'Legal exit of precious metals from Uganda',
    authority: 'Ministry of Energy and Mineral Development (MEMD)'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'uganda-gold-hub',
    title: 'Uganda: The Emerging Hub for African Precious Metals Refinement',
    category: 'Gold Market News',
    summary: 'An in-depth look at how Uganda has established state-of-the-art refining capabilities and streamlined export frameworks to attract multi-million-dollar global bullion investments.',
    content: 'Over the last decade, Uganda has transformed its mining and mineral trading sectors through substantial regulatory overhauls and infrastructure investments. Under the Ugandan Mining Act, the government has created an enabling environment for private gold refiners and dealers. Afrimex Mineral Dealers Limited has been at the forefront of this shift, bridging the gap between local cooperative mining sites and sovereign refining centers across Europe and the Middle East. With advanced smelting systems and fully digitized export documentation, Kampala now offers the same speed, security, and traceability as traditional bullion ports, making it a critical hub for international investment-grade physical gold.',
    date: 'June 18, 2026',
    author: 'Andrew S. Kabunga',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80',
    focusKeyword: 'Ugandan Gold Export'
  },
  {
    id: 'oecd-compliance-guide',
    title: 'Responsible Sourcing: Complete Guide to the OECD Guidelines in East Africa',
    category: 'Compliance',
    summary: 'How Afrimex enforces strict compliance protocols to eliminate child labor, ensure conflict-free gold sourcing, and maintain full transparency with international banks.',
    content: 'International buyers require absolute certainty regarding the provenance of their physical gold. The OECD Due Diligence Guidance for Responsible Supply Chains of Minerals provides the global benchmark for ethical sourcing. In this article, our compliance team breaks down the five-step framework implemented at Afrimex Mineral Dealers. This includes mapping the exact mine of origin, enforcing strict child-labor prohibitions at our partner cooperatives, conducting thorough Know Your Customer (KYC) audits on all trade participants, and maintaining an auditable digital trail of transport receipts. Following these procedures shields investors from regulatory risk and supports local Ugandan communities by providing sustainable, non-exploitative livelihoods.',
    date: 'May 10, 2026',
    author: 'Sarah N. Lwanga (Compliance Officer)',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    focusKeyword: 'OECD Responsible Minerals'
  },
  {
    id: 'gold-assay-methods',
    title: 'Fire Assay vs. XRF Spectrum Analysis: How Gold Purity is Certified',
    category: 'Gold Sourcing',
    summary: 'Demystifying the technical processes behind gold testing. Learn why fire assay remains the globally respected gold standard for institutional bullion trades.',
    content: 'When a precious metals shipment valued at millions of dollars is prepared for export, a variation of even 0.01% in purity can result in significant financial differences. That is why Afrimex utilizes a dual-tier testing methodology. For rapid, non-destructive initial scanning, our laboratory utilizes advanced X-Ray Fluorescence (XRF) analyzers, which measure the metallic spectrum of a bar within seconds. However, for ultimate official certification, we perform classic Fire Assay testing. This ancient, highly refined pyrometallurgical process involves melting a tiny, precise scrap of the gold with lead and silver, burning off base metals in a cupel, and weighing the remaining pure gold on micro-balances. This dual-testing protocol ensures that our buyers receive exactly what they pay for, verified by third-party government labs.',
    date: 'April 22, 2026',
    author: 'Dr. Michael Ssemogerere (Chief Metallurgist)',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
    focusKeyword: 'Gold Assaying Uganda'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Afrimex Mineral Dealers has set a new benchmark for precious metals trading in East Africa. Their commitment to compliance, transparent fire assay testing, and meticulous preparation of export documentation made our institutional purchase seamless.",
    author: "Maximilian Richter",
    title: "Managing Director",
    company: "Aureum Global Asset Management (Zurich, Switzerland)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "We have sourced natural alluvial nuggets and unrefined gold dust through Afrimex for over three years. Their adherence to OECD sourcing guidelines and local community support matches our corporate ESG standards perfectly.",
    author: "Priya Sharma",
    title: "Chief Sourcing Officer",
    company: "Indus Fine Jewellery & Bullion (Mumbai, India)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Navigating African mineral imports can be complex, but Afrimex’s documentation suite is flawless. Every Commercial Invoice, Assay Report, and Export Permit aligns perfectly with UAE customs and banking regulations.",
    author: "Faisal Al-Mansoori",
    title: "Founder & CEO",
    company: "Al-Mansoori Precious Metals Trading LLC (Dubai, UAE)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQS: FAQItem[] = [
  // Category: Licensing & Credentials (1-10)
  {
    id: 'faq-1',
    category: 'Licensing & Credentials',
    question: 'Is Afrimex Mineral Dealers Limited a fully licensed company?',
    answer: 'Yes, Afrimex Mineral Dealers Limited is a fully registered private limited liability company in Uganda, licensed by the Ministry of Energy and Mineral Development (MEMD) under the Mining Act with Mineral Dealers License MDL20260633. We hold active mineral dealer and export permits, allowing us legally to source, melt, assay, store, and export precious metals internationally.'
  },
  {
    id: 'faq-2',
    category: 'Licensing & Credentials',
    question: 'How can an international buyer verify Afrimex’s licenses?',
    answer: 'International buyers can verify our corporate status and licensing credentials through the Uganda Registration Services Bureau (URSB) using our official URSB Certificate of Incorporation Registration number: 80034313511703, and by cross-referencing our active export permits (Mineral Dealers License MDL20260633) with the Directorate of Geological Survey and Mines under the Ministry of Energy and Mineral Development.'
  },
  {
    id: 'faq-3',
    category: 'Licensing & Credentials',
    question: 'Do you operate in compliance with the Ugandan Mining Act?',
    answer: 'Absolutely. We operate in strict compliance with the Uganda Mining Act of 2022 (and its successive regulations), which governs mineral licensing, environmental protection, royalty payments, local content, and occupational safety.'
  },
  {
    id: 'faq-4',
    category: 'Licensing & Credentials',
    question: 'What is your corporate tax and compliance standing?',
    answer: 'Afrimex holds an active Tax Identification Number (TIN) with the Uganda Revenue Authority (URA), which is TIN: 105686028. We are in excellent standing, maintaining up-to-date income tax clearances, withholding tax records, and customs declarations.'
  },
  {
    id: 'faq-5',
    category: 'Licensing & Credentials',
    question: 'Where is the corporate headquarters of Afrimex located?',
    answer: 'We operate two primary facilities in Uganda. Office 1 (Corporate Office & Assaying): Plot 01, Crested Towers, Nakaseero Division, Kampala City, Uganda. Office 2 (Smelting & Secure Storage): Kitala, Kampala-Entebbe Road, Wakiso District, Central Uganda. Both facilities are highly secure, equipped with advanced security gates, armed personnel, and 24/7 CCTV surveillance.'
  },
  {
    id: 'faq-6',
    category: 'Licensing & Credentials',
    question: 'Who oversees compliance and operations at Afrimex?',
    answer: 'Our executive team consists of experienced Ugandan mineral geologists, certified metallurgists, and legal compliance experts who have operated in the East African bullion markets for over two decades.'
  },
  {
    id: 'faq-7',
    category: 'Licensing & Credentials',
    question: 'Do you work directly with the Ugandan government?',
    answer: 'We operate as a private enterprise but collaborate closely with government institutions. Our export shipments are sealed under the supervision of Uganda Revenue Authority (URA) officers and Directorate geologists.'
  },
  {
    id: 'faq-8',
    category: 'Licensing & Credentials',
    question: 'Are you a member of any local mineral trade associations?',
    answer: 'Yes, we are active members of the Uganda Chamber of Mines and Petroleum (UCMP) and collaborate on industry working groups dedicated to ethical sourcing and trade formalization.'
  },
  {
    id: 'faq-9',
    category: 'Licensing & Credentials',
    question: 'Do you have international legal representatives?',
    answer: 'Yes, we retain premier corporate law firms in Kampala and Zurich to manage international contract dispute risks and oversee secure transactions.'
  },
  {
    id: 'faq-10',
    category: 'Licensing & Credentials',
    question: 'Can you assist in arranging meetings with mineral regulatory authorities?',
    answer: 'During physical buyer visits to Uganda, we gladly coordinate courtesy visits with officers at the Directorate of Geological Survey and Mines to verify our export volumes and standing.'
  },

  // Category: Buying & Export Process (11-20)
  {
    id: 'faq-11',
    category: 'Buying & Export Process',
    question: 'What are the required steps to initiate a gold purchase contract?',
    answer: 'The process begins with the buyer submitting a formal Letter of Intent (LOI) on corporate letterhead, followed by our issuance of a Full Corporate Offer (FCO). Once terms are accepted, we draft a Sales and Purchase Agreement (SPA), followed by mutual KYC audits.'
  },
  {
    id: 'faq-12',
    category: 'Buying & Export Process',
    question: 'Can I purchase gold from Afrimex without visiting Uganda?',
    answer: 'Yes. While we highly recommend that buyers visit Kampala to witness the smelting and assaying of their gold, we can execute transactions via certified video streams, independent assayers (like SGS), and secure bank escrow routing.'
  },
  {
    id: 'faq-13',
    category: 'Buying & Export Process',
    question: 'What is the minimum order quantity (MOQ) for export?',
    answer: 'Our standard minimum order quantity for international air-freight export is 5 kilograms of gold. Smaller quantities (100g to 1kg) can be purchased for physical hand-carry by licensed buyers visiting our Kampala office.'
  },
  {
    id: 'faq-14',
    category: 'Buying & Export Process',
    question: 'Who handles the logistical arrangements for the export?',
    answer: 'Afrimex manages all local logistics inside Uganda—including armored transport from vaults to Entebbe International Airport (EBB). For international flight legs, we partner with specialized, fully-insured couriers like Brinks or Malca-Amit.'
  },
  {
    id: 'faq-15',
    category: 'Buying & Export Process',
    question: 'How long does the entire export clearance process take?',
    answer: 'Once payment is secured, obtaining the official export permit, clearing customs, settling royalty levies, and booking secure cargo flight space takes approximately 3 to 5 business days.'
  },
  {
    id: 'faq-16',
    category: 'Buying & Export Process',
    question: 'Which international cargo airlines do you use?',
    answer: 'We routinely ship gold bullion via major premium commercial carriers equipped with high-security cargo compartments, including Emirates, Turkish Airlines, Brussels Airlines, and Qatar Airways.'
  },
  {
    id: 'faq-17',
    category: 'Buying & Export Process',
    question: 'What happens if a gold shipment is delayed or lost in transit?',
    answer: 'All Afrimex shipments are protected under "All-Risk" transit insurance issued by A-rated international Lloyd’s underwriters, covering 100% of the declared commercial value of the cargo from our vault to yours.'
  },
  {
    id: 'faq-18',
    category: 'Buying & Export Process',
    question: 'Do you offer monthly rollover or long-term supply contracts?',
    answer: 'Yes, we specialize in establishing 12-to-24-month supply agreements, supplying up to 200kg of gold per month to qualified institutional bullion dealers, refineries, and private mints.'
  },
  {
    id: 'faq-19',
    category: 'Buying & Export Process',
    question: 'Can we use our own preferred customs broker in the destination country?',
    answer: 'Certainly. We will coordinate directly with your designated customs clearing agent at your destination airport (e.g., Dubai DMCC, Zurich Airport, or London Heathrow) to ensure seamless cargo handover.'
  },
  {
    id: 'faq-20',
    category: 'Buying & Export Process',
    question: 'What is the role of an Airway Bill (AWB) in the shipment?',
    answer: 'The Airway Bill acts as the non-negotiable contract of carriage between the shipper (Afrimex) and the airline, containing detailed descriptions of the high-value cargo and the exact consignee details.'
  },

  // Category: Payments, Assay & Taxes (21-30)
  {
    id: 'faq-21',
    category: 'Payments, Assay & Taxes',
    question: 'What payment methods do you accept for gold purchases?',
    answer: 'We accept payments exclusively through secure bank-to-bank Wire Transfers (Telegraphic Transfer - T/T) or through fully confirmed, irrevocable bank escrow mechanisms from internationally reputable banking institutions.'
  },
  {
    id: 'faq-22',
    category: 'Payments, Assay & Taxes',
    question: 'Do you accept cash payments for gold bullion exports?',
    answer: 'No. To prevent money laundering and adhere strictly to international AML policies, Afrimex does not accept physical cash payments for export contracts. All funds must flow through transparent, audited commercial bank accounts.'
  },
  {
    id: 'faq-23',
    category: 'Payments, Assay & Taxes',
    question: 'How is the final purchase price of the gold determined?',
    answer: 'Pricing is pegged directly to the London Bullion Market Association (LBMA) gold spot index at the exact time of the official assay certificate. We offer institutional buyers attractive percentage discounts based on contract volumes.'
  },
  {
    id: 'faq-24',
    category: 'Payments, Assay & Taxes',
    question: 'What is the gold assaying process, and where is it conducted?',
    answer: 'The assay is performed in our modern Kampala facility using high-precision fire assaying or X-Ray Fluorescence. Split samples can also be submitted to the government’s central geological lab for official validation.'
  },
  {
    id: 'faq-25',
    category: 'Payments, Assay & Taxes',
    question: 'Are there export taxes on gold from Uganda?',
    answer: 'Yes, the Government of Uganda levies an export royalty/tax on precious metals. Under our standard SPA, Afrimex covers all national export royalties, clearances, and processing levies, making the price quote fully inclusive of outbound taxes.'
  },
  {
    id: 'faq-26',
    category: 'Payments, Assay & Taxes',
    question: 'Is VAT (Value Added Tax) applicable to exported gold?',
    answer: 'Under Ugandan tax law, raw or refined gold exported to international destinations is classified as a zero-rated export, meaning no local Value Added Tax (VAT) is added to the export invoice.'
  },
  {
    id: 'faq-27',
    category: 'Payments, Assay & Taxes',
    question: 'Can we use an independent laboratory like SGS or Alfred H. Knight?',
    answer: 'Yes. We fully support and welcome independent inspection by internationally accredited assayers like SGS, Alfred H. Knight, or Alex Stewart. The independent inspector can oversee the smelt and issue a binding purity certificate.'
  },
  {
    id: 'faq-28',
    category: 'Payments, Assay & Taxes',
    question: 'What are the bank transfer charges and who pays them?',
    answer: 'Each party is responsible for their own respective bank charges. The buyer pays their sending and intermediary bank fees, and Afrimex covers the receiving bank’s inbound wire processing charges.'
  },
  {
    id: 'faq-29',
    category: 'Payments, Assay & Taxes',
    question: 'Do you offer credit terms or deferred payment structures?',
    answer: 'No. Precious metals are highly liquid assets with narrow margins. We do not offer credit, deferred payments, or dispatch shipments prior to receiving full, verified payment or bank-confirmed escrow releases.'
  },
  {
    id: 'faq-30',
    category: 'Payments, Assay & Taxes',
    question: 'What is fire assay, and why is it considered the global standard?',
    answer: 'Fire assay is a pyrometallurgical technique where a small gold sample is melted with specific fluxes, parting base elements completely. It provides a precision of 999.9 parts per thousand, which is legally recognized by all international bullion markets.'
  },

  // Category: Compliance & Responsible Sourcing (31-40)
  {
    id: 'faq-31',
    category: 'Compliance & Sourcing',
    question: 'What is your policy regarding responsible, conflict-free sourcing?',
    answer: 'Afrimex enforces a zero-tolerance policy for gold linked to armed conflict, human rights abuses, or forced labor. We perform regular field audits on all cooperative mine sites to ensure total alignment with the OECD Due Diligence Guidelines.'
  },
  {
    id: 'faq-32',
    category: 'Compliance & Sourcing',
    question: 'How do you prevent child labor in your gold supply chain?',
    answer: 'We require all partner artisanal miner cooperatives to sign binding covenants prohibiting child labor. We conduct unannounced physical site visits and verify school attendance records in active mining communities.'
  },
  {
    id: 'faq-33',
    category: 'Compliance & Sourcing',
    question: 'Do you comply with international Anti-Money Laundering (AML) standards?',
    answer: 'Yes, our AML policy is designed around the Financial Action Task Force (FATF) guidelines. We verify corporate registry files, beneficial ownership structures, and source-of-wealth reports for every transactional counterparty.'
  },
  {
    id: 'faq-34',
    category: 'Compliance & Sourcing',
    question: 'What documents are required from a buyer for KYC onboarding?',
    answer: 'A buyer must submit a completed Afrimex KYC questionnaire, their corporate certificate of incorporation, corporate articles of association, colored passport copies of directors, and a bank comfort letter (BCL) or proof of funds.'
  },
  {
    id: 'faq-35',
    category: 'Compliance & Sourcing',
    question: 'Do you support environmental preservation at mining sites?',
    answer: 'Yes. We actively support artisanal cooperatives in transitioning away from harmful mercury and cyanide usage, promoting eco-friendly gravity-separation washing methods that preserve local water tables.'
  },
  {
    id: 'faq-36',
    category: 'Compliance & Sourcing',
    question: 'Are your shipments audited for ESG compliance?',
    answer: 'Our sourcing and supply chain records undergo annual, independent third-party ESG (Environmental, Social, and Governance) audits to ensure we maintain our status as a trusted partner for western institutional investors.'
  },
  {
    id: 'faq-37',
    category: 'Compliance & Sourcing',
    question: 'Do you report transactions to local financial intelligence units?',
    answer: 'In compliance with the Financial Intelligence Authority (FIA) of Uganda, we maintain full records of all transactions and file standard reporting to prevent illicit capital flows in the precious metals sector.'
  },
  {
    id: 'faq-38',
    category: 'Compliance & Sourcing',
    question: 'Can US or EU companies legally import gold from Afrimex?',
    answer: 'Yes, absolutely. Because we operate with complete transparency, pay all national mineral levies, and align 100% with OECD mineral supply guidelines, our gold is fully clear for legal import into the US, EU, and Switzerland.'
  },
  {
    id: 'faq-39',
    category: 'Compliance & Sourcing',
    question: 'What is a "Beneficial Owner" and why do you verify it?',
    answer: 'A Beneficial Owner is the actual human individual who owns or controls more than 10% of the buying corporation. We verify this to ensure we are not conducting transactions with shell corporations or politically exposed persons (PEPs).'
  },
  {
    id: 'faq-40',
    category: 'Compliance & Sourcing',
    question: 'How is transaction privacy and data security handled at Afrimex?',
    answer: 'All corporate trade files, KYC submittals, and bank communications are handled over high-encryption local servers and stored securely in accordance with Uganda’s Data Protection and Privacy Act.'
  }
];

export const GLOBAL_HUBS = [
  { name: 'UAE (Dubai)', coordinates: { x: 55, y: 35 }, description: 'Primary wholesale bullion trading destination' },
  { name: 'Switzerland (Zurich)', coordinates: { x: 48, y: 22 }, description: 'High-purity refinery integration and asset vaults' },
  { name: 'Turkey (Istanbul)', coordinates: { x: 50, y: 28 }, description: 'Sovereign and retail jewelry minting clients' },
  { name: 'India (Mumbai)', coordinates: { x: 68, y: 40 }, description: 'Highest volume consumer jewelry market' },
  { name: 'China (Shenzhen)', coordinates: { x: 82, y: 42 }, description: 'Industrial and retail investment bullion' },
  { name: 'Singapore', coordinates: { x: 80, y: 55 }, description: 'Tax-free South East Asian logistics and storage' },
  { name: 'United Kingdom (London)', coordinates: { x: 44, y: 20 }, description: 'LBMA standard bullion pricing benchmark' },
  { name: 'Canada (Toronto)', coordinates: { x: 25, y: 25 }, description: 'North American mineral investment funds' },
  { name: 'South Africa (Johannesburg)', coordinates: { x: 52, y: 78 }, description: 'Regional refinery partnerships' },
  { name: 'Saudi Arabia (Riyadh)', coordinates: { x: 53, y: 38 }, description: 'Middle Eastern state-level precious reserves' },
  { name: 'Qatar (Doha)', coordinates: { x: 54, y: 36 }, description: 'Sovereign wealth metal allocations' },
  { name: 'USA (New York)', coordinates: { x: 22, y: 28 }, description: 'COMEX exchange delivery hubs' }
];

export const INDUSTRIES = [
  { name: 'Fine Jewellery Manufacturers', desc: 'Sourcing ethical high-karat gold for premium worldwide brands.' },
  { name: 'Sovereign Wealth & Central Banks', desc: 'Supplying certified bullion reserves for national monetary backing.' },
  { name: 'Commercial Refineries & Mints', desc: 'Feeding unrefined gold dust and bars directly to state-of-the-art smelting plants.' },
  { name: 'High-Net-Worth Private Offices', desc: 'Executing physical gold acquisition for wealth-shielding portfolios.' },
  { name: 'Institutional Bullion Dealers', desc: 'Consistent rolling cargo allocations to support retail and commercial mint demands.' },
  { name: 'Industrial Electronics Sectors', desc: 'Providing highly refined silver and metal co-products for high-tech microcircuitry.' }
];
