export type Certificate = { src: string; caption: string };

export type Sponsor = {
  name: string;
  description: string;
  logo?: string;
};

export type Partner = {
  name: string;
  description: string;
  certificates: Certificate[];
};

export const sponsors: Sponsor[] = [
  {
    name: "Ajax Crematorium & Visitation Centre",
    logo: "/sponsor-logos/ajax-crematorium.png",
    description:
      "An event sponsor of the 2026 Ajax–Durham Diwali Festival, whose support helped bring Durham Region's first Diwali drone show to life.",
  },
  {
    name: "Advisory Money",
    logo: "/sponsor-logos/advisory-money.png",
    description:
      "An event sponsor of the 2026 Ajax–Durham Diwali Festival, helping HCCD celebrate the Festival of Lights with thousands of families across Durham Region.",
  },
];

export const partners: Partner[] = [
  {
    name: "City of Pickering",
    description: "The City of Pickering has recognized and supported HCCD's community celebrations.",
    certificates: [
      {
        src: "/event-photos/ajax-durham-diwali-festival/certificates/2.jpg",
        caption: "Kevin Ashe, Mayor of Pickering",
      },
    ],
  },
  {
    name: "Town of Ajax",
    description: "The Town of Ajax has recognized and supported HCCD's community celebrations.",
    certificates: [
      {
        src: "/event-photos/ajax-durham-diwali-festival/certificates/10.jpg",
        caption: "Shaun Collier, Mayor of Ajax",
      },
    ],
  },
];

/** E-transfer details shown on the Donate page. */
export const donation = {
  etransferEmail: "hinducommunitycentre@gmail.com",
  instructions: [
    "Open Interac e-Transfer in your bank app and add hinducommunitycentre@gmail.com as the recipient.",
    "Enter the amount you would like to donate.",
    'In the message, write "Donation for HCCD" followed by your name.',
  ],
};
