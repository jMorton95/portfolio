import { TProjectTopSectionProps } from "../../../types/Types";
import './../projects.css'

export default function ProjectTopSection(props: TProjectTopSectionProps) {
  return (
    <div className={`projectsTopSection ${props.alignment} flex flex-row`}>
      <ul>
        {props.keypoints && props.keypoints.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
      <div className="techLogos">
      {props.logos && props.logos.map((logo, index) => <img title={logo} height="48px" width="48px" src={"/public/techlogos/" + logo}key={index}/>)}
      </div>
    </div>
  )
};
