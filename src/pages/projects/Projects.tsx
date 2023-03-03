import data from '../../repository/projects.json';
import { Project } from '../../types/Types';

export default function Projects() {
  const datas: Project[] = data; 
  datas.forEach(dat => {
    console.log(dat.name);
  })
  return (
    <section className="projects">Projects Page
      <div className="border-t border-white"></div>
      <div className="border-t border-white"></div>
    </section>
  )
}