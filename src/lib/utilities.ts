import { TOOLS } from './Constants';

export const getDomain = (url: string) => {
  const { hostname } = new URL(url);
  const parts = hostname.split('.');
  if (parts.length > 2) {
    parts.shift();
  }
  return parts.join('.');
};

export const getToolIcon = (toolName: string) => {
  const tool = TOOLS.find((tool) => tool.name === toolName);
  return tool ? tool.icon : null;
};
