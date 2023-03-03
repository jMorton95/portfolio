/**
 * Made to wrap our Projects.JSON repository we're using to fake a Database.
 */
export type Project = {
  name: string,
  description: string,
  keypoints: string[],
  url: string
}