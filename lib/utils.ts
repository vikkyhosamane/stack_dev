import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTagIconClassName = (tech: string) => {
  const normalized = (tech || "")
    .trim()
    .toLowerCase()
    .replace(/[\s._-]+/g, "");

  if (!normalized) return null;

  const matchedClass = Object.entries(techMap).find(([key]) => {
    return key.toLowerCase().replace(/[\s._-]+/g, "") === normalized;
  });

  return matchedClass ? matchedClass[1] : null;
};

export const getTagIcon = (tech: string) => {
  const iconClass = getTagIconClassName(tech);

  if (iconClass) {
    return { type: "icon", className: iconClass };
  }

  return { type: "image", src: "/icons/tag.svg" };
};
