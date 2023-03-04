import { TProjectTopSectionProps } from "../../../types/Types";
import './../projects.css'

export default function ProjectTopSection(props: TProjectTopSectionProps) {
  return (
    <div className={`projectsTopSection ${props.alignment} flex flex-row justify-start gap-6 py-6 lg:py-12`}>
      <ul className="keypoints flex flex-col px-4">
        {props.keypoints && props.keypoints.map((point, index) => 
          <li className="list-none" key={index}>{point}</li>
        )}
      </ul>
      <ul className="techLogos px-4 grid gap-2 w-fit max-sm:grid-cols-2">
        {props.logos && props.logos.map((logo, index) => 
        <li className="">
          <img className="" title={logo} src={"/public/techlogos/" + logo}key={index}/>
        </li>
        )}
      </ul>
    </div>
  )
};
