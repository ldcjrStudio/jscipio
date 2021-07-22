import getProjects from "../../lib/projects";
import getProject from "../../lib/projects";

export default function Project({ project }) {
  const data = project.fields;

  console.log(data);
  return (
    <>
      <section>This is where the projects go</section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const projects = await getProject();
  const projectData = projects.filter(function (project) {
    return project.id === params.id;
  });
  const project = projectData[0];

  return {
    props: {
      project,
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const records = await getProjects();
  const paths = records.map((record) => ({ params: { id: record.id } }));
  return {
    paths,
    fallback: false,
  };
}
