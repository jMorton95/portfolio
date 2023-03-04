import { filterArrayAgainstEnum } from "../../../services/ProjectsDataService";
import { ETechLogos, TProject } from "../../../types/Types";
import ProjectTopSection from "./ProjectTopSection";

export default function Project(props: TProject) {
  const validLogos = filterArrayAgainstEnum(ETechLogos, props.logos);
  const alignment = (props.id % 2 === 0) ? "right" : "left";
  return (
    <section className="py-6">
      <h3>
        {props.name}
      </h3>
     <ProjectTopSection alignment={alignment} keypoints={props.keypoints} logos={validLogos} />
      <p>
        {props.description}
      </p>
      <a href={props.url}>Repo</a>
    </section>
  )
};
