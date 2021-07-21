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

const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);
// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
    return records.map(record => minifyRecord(record));
  };
  
  // gets the data we want and puts it into variables
  const minifyRecord = record => {
    return {
      id: record.id,
      fields: record.fields,
    };
  };

export default async function getProjects() {
  const records = await table.select({}).all();

  console.log(records);
  const minifiedRecords = await getMinifiedRecords(records);

  console.log(minifiedRecords);

  return minifiedRecords;

//   return records;
}