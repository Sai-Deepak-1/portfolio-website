import React from "react";

// TechnologyType can now be either a URL string (for SVG/PNG) or a React element (for inline SVGs)
export type TechnologyType = string | React.ReactElement;

export type ProjectType = {
  // icon can be a string for image URLs (png, svg) or a React element (for inline SVGs)
  icon: string | React.ReactElement;
  title: string;
  subtitle: string;
  // technologies is an array of TechnologyType, which can be a string or React element
  technologies: TechnologyType[];
  description: string;
  imgUrl: string;
  videoUrl: string;
  githubUrl: string;
  websiteUrl: string;
};
