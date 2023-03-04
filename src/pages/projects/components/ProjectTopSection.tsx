import { TProjectTopSectionProps } from "../../../types/Types";
import './../projects.css'

export default function ProjectTopSection(props: TProjectTopSectionProps) {
  return (
    <div className={`projectsTopSection ${props.alignment} flex flex-row justify-start gap-6 py-6 lg:py-12`}>
      <ul className="keypoints flex flex-col">
        {props.keypoints && props.keypoints.map((point, index) => 
          <li className="list-none" key={index}>{point}</li>
        )}
      </ul>
      <ul className="techLogos flex flex-row flex-wrap">
        {props.logos && props.logos.map((logo, index) => 
        <li className="pb-8">
          <img className="w-24 max-md:w-16 max-sm:w-12 h-24 max-md:h-16 max-sm:h-12" title={logo} src={"/public/techlogos/" + logo}key={index}/>
        </li>
        )}
      </ul>
    </div>
  )
};
