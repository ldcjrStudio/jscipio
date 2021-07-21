

import getProjects from "../components/getProjects"

export default function Project({posts}) {
console.log(posts)
    
    return(
        <>
        <section>
            This is where the projects go
        </section>
        

        </>
    )
}

export async function getStaticProps() {
    const posts = await getProjects();
  
    return {
      props: {
        posts,revalidate: 1,
      },
    };
  }


// export async function getStaticProps({context}){

//     const projects = await getStaticPaths()
//     return {
//         props: {
//             projects,
//         }
//     }
//     // const Airtable = require('airtable')
//     // const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY,}).base(process.env.AIRTABLE_BASE_ID)
//     // const table = base(process.env.AIRTABLE_TABLE_NAME)

//     // const records = await table.select({}).all();

//     // console.log(records);

//     // const res = await fetch('https://data')
//     // const data = await res.json()

//     // if (!data) {
//     //     return {
//     //         notFound: true,
//     //     }
//     // }

//     // return {
//     //     props: {records,}, //will be passed to page comonent as props.
//     // }
// }

//create the paths

// const Airtable = require('airtable')
// const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY,}).base(process.env.AIRTABLE_BASE_ID)
// const table = base(process.env.AIRTABLE_TABLE_NAME)
// console.log(base)

// export async function getStaticPaths(){
//     const Airtable = require('airtable')
//     const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY,}).base(process.env.AIRTABLE_BASE_ID)
//     const table = base(process.env.AIRTABLE_TABLE_NAME)
//     const records = await table.select({}).all();
//     const paths = records.map((record) => ({
//         params: {project: record.id.toString()},
//     }))
//     return { paths, fallback: 'blocking' }
// }




