


function Project({data}) {
    return(
        <>
        <section>
            This is where the projects go
        </section>

        </>
    )
}


export async function getStaticProps(context){
    const res = await fetch('https://data')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {data}, //will be passed to page comonent as props.
    }
}

//create the paths
export async function getStaticPaths(){
    const res = await fetch("https://.../projects")
    const projects = await res.json()

    const paths = projects.map((project) => {
        params: {project: project.id}
    })
    return { paths, fallback: 'blocking' }
}

export default Project