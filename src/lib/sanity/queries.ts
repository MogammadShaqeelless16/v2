export const getAboutMe = `*[_type == "aboutMe"]{
  name,
  bio,
  "imageUrl": image.asset->url,
  stats
}[0]`;

export const getExperiences = `*[_type == "experience"]{
  title,
  location,
  partTime,
  duration,
  company,
  description,
  "logo": company.logo.asset->url,
  tech[]->{
    name,
  },
} | order(duration.from desc)`;

export const getFeaturedProjects = `*[_type == "project" && featured == true]{
  title,
  slug,
  featured,
  date,
  status,
  description,
  href,
  source,
  tech[]->{
    name,
  },
  "mainImage": images[0].image.asset->url
} | order(title asc)`;

export const getProjects = `*[_type == "project"]{
  title,
  slug,
  featured,
  date,
  status,
  description,
  href,
  source,
  tech[]->{
    name,
  },
  "images": images[].image.asset->url
} | order(featured desc)`;

export const getProjectBySlug = `*[_type == "project" && slug.current == $slug]{
  title,
  slug,
  date,
  status,
  description,
  href,
  source,
  tech[]->{
    name,
  },
  "images": images[].image.asset->url,
  contentTitle,
  content,
}[0]`;

export const getFaqs = `*[_type == "faq"]{
  index,
  question,
  answer,
} | order(featured asc)`;
