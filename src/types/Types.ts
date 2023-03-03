/**
 * Made to wrap our Projects.JSON repository we're using to fake a Database.
 */
export type TProject = {
  id: number,
  name: string,
  description: string,
  keypoints: string[],
  url: string
}