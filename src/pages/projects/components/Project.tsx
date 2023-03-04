import { filterArrayAgainstEnum } from "../../../services/ProjectsDataService";
import { ETechLogosPaths, TProject } from "../../../types/Types";

export default function Project(props: TProject) {
  const validLogos = filterArrayAgainstEnum(ETechLogosPaths, props.logos);
  return (
    <section className="py-6">
      <h3>
        {props.name}
      </h3>
      <ul>
        {props.keypoints && props.keypoints.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
      <p>
        {props.description}
      </p>
      <a href={props.url}>Repo</a>
      {validLogos && validLogos.map((logo, index) => <p key={index}>{logo}</p>)}
    </section>
  )
};

