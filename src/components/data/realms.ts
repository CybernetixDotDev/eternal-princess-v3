import { socialUrls } from "@/components/data/socialLinks";

export type Realm = {
  label: string;
  description: string;
  status: string;
  imageSrc: string;
  href?: string;
  externalHref?: string;
  destinationLabel?: string;
  actionLabel: string;
  isMature?: boolean;
  tone: "garden" | "atelier" | "afterDark" | "observatory";
};

export const realms: Realm[] = [
  {
    label: "THE GARDEN",
    description:
      "My story. Identity, becoming, reflection and the quieter magic of being seen.",
    status: "PERSONAL REALM",
    imageSrc: "/gardenTile.png",
    href: "/garden",
    actionLabel: "Enter the Garden",
    tone: "garden",
  },
  {
    label: "THE ATELIER",
    description:
      "Fashion, beauty, photographs and the art of becoming visible.",
    status: "VISUAL REALM",
    imageSrc: "/atelierTileV2.png",
    externalHref: socialUrls.instagram,
    destinationLabel: "Instagram",
    actionLabel: "Enter the Atelier",
    tone: "atelier",
  },
  {
    label: "AFTER DARK",
    description:
      "A softer, bolder, more intimate corner of the realm.",
    status: "INTIMATE REALM",
    imageSrc: "/AfterDarkTile.png",
    externalHref: socialUrls.onlyFans,
    destinationLabel: "OnlyFans",
    actionLabel: "Enter After Dark",
    isMature: true,
    tone: "afterDark",
  },
  {
    label: "THE OBSERVATORY",
    description:
      "Ideas, architecture, technology and a view toward what might exist next.",
    status: "IDEAS REALM",
    imageSrc: "/observatoryTile.png",
    externalHref: socialUrls.linkedin || undefined,
    destinationLabel: "LinkedIn",
    actionLabel: socialUrls.linkedin ? "Enter the Observatory" : "LinkedIn to come",
    tone: "observatory",
  },
];
