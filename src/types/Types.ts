/**
 * Made to wrap our Projects.JSON repository we're using to fake a Database.
 */
export type TProject = {
  id: number,
  name: string,
  description: string,
  keypoints: string[],
  logos: string[],
  url: string
}

export enum ETechLogos {
  dotnet = "dotnet.svg",
  javascript = "javascript.svg",
  react = "react.svg",
  tailwind = "tailwind.svg",
  umbraco = "umbraco.svg",
  vite = "vite.svg",
  typescript = "typescript.svg",
  sql = "sql.svg",
  bootstrap = "bootstrap.svg"
}

export type TProjectTopSectionProps = {
  keypoints: string[],
  logos: string[],
  alignment: string
}