import getProjects from "../../lib/projects";
import getProject from "../../lib/projects";

export default function Project({ projectData }) {
  const project = projectData[0].fields;

  console.log(project);
  return (
    <>
      <section>
        <p>{project.Name}</p>
        <p>{project.Description}</p>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const projects = await getProject();
  const projectData = projects.filter(function (project) {
    return project.fields.Slug === params.id;
  });

  return {
    props: {
      projectData,
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const records = await getProjects();
  const paths = records.map((record) => ({
    params: { id: record.fields.Slug },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
