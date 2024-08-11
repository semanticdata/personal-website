import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Miguel Pimentel",
  DESCRIPTION: "Problem solver, hobby developer, music enjoyer, and public infrastructure enthusiast based in Minnesota, US.",
  EMAIL: "contact@miguelpimentel.com",
  NUM_POSTS_ON_HOMEPAGE: 7,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Problem solver, hobby developer, music enjoyer, and public infrastructure enthusiast based in Minnesota, US.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Mastodon",
    HREF: "https://mastodon.social/@semanticdata",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/semanticdata",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/miguelpimentel29/",
  },
];
