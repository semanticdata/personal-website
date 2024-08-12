import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Miguel Pimentel",
  DESCRIPTION: "Problem solver, hobby developer, music enjoyer, and public infrastructure enthusiast based in Minnesota, US.",
  EMAIL: "contact@miguelpimentel.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Problem solver, hobby developer, music enjoyer, and public infrastructure enthusiast based in Minnesota, US.",
};

export const ABOUT: Metadata = {
  TITLE: "About Me",
  DESCRIPTION: "Hi, I'm Miguel Pimentel. Problem solver, hobby developer, music enjoyer, and public infrastructure enthusiast based in Minnesota, US.",
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

export const USES: Metadata = {
  TITLE: "Uses",
  DESCRIPTION:
    "A collection of tools and technologies I use on a regular basis.",
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
