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

export enum ETechLogosPaths {
  dotnet = "/public/techlogos/dotnet.svg",
  javascript = "/public/techlogos/javascript.svg",
  react = "/public/techlogos/react.svg",
  tailwind = "/public/techlogos/tailwind.svg",
  umbraco = "/public/techlogos/umbraco.svg",
  vite = "/public/techlogos/vite.svg",
  typescript = "/public/techlogos/typescript.svg",
  sql = "/public/techlogos/sql.svg",
  bootstrap = "/public/techlogos/bootstrap.svg"
}