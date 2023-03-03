import { TProject } from "../../../types/Types";

export default function Project(props: TProject) {
  return (
    <section>
      {props.name}
    </section>
  )
};
