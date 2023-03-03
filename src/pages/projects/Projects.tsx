import projectData from '../../repository/projects.json';
import { TProject } from '../../types/Types';
import Project from './components/Project';
import './projects.css';

export default function Projects() {
  const projectProps: TProject[] = projectData;
  return (
    <div className="projects">
    {projectProps.length > 0 && projectProps.map(project => <Project key={project.id} {...project}/>)}
    </div>
  )
}