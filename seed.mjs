// import * as dotenv from 'dotenv';
// import { MongoClient } from 'mongodb';

// dotenv.config();

// const uri = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error('MONGODB_URI is not defined in the environment variables');
// }
// const client = new MongoClient(uri);

// async function seedDatabase() {
//   try {
//     await client.connect();
//     const db = client.db('forensicsDB');
    
//     // Seed data
//     const fraudCases = [
//       {
//         title: 'Ponzi Scheme Investigation',
//         year: 2020,
//         amountDefrauded: 500000,
//         description: 'A fraudulent investment operation where returns were paid to earlier investors using the capital from new investors.',
//       },
//       {
//         title: 'Corporate Tax Evasion Case',
//         year: 2022,
//         amountDefrauded: 1200000,
//         description: 'A corporation misreported their financial earnings to evade paying taxes.',
//       },
//       {
//         title: 'Money Laundering Network',
//         year: 2021,
//         amountDefrauded: 850000,
//         description: 'A complex network used to launder money through shell companies.',
//       },
//     ];

//     const fraudCasesCollection = db.collection('fraudCases');
//     await fraudCasesCollection.insertMany(fraudCases);

//     console.log('Database seeded successfully!');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   } finally {
//     await client.close();
//   }
// }

// seedDatabase();

import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    const db = client.db('forensicsDB');
    
    // Seed data for tax slabs
    const taxSlabs = [
      {
        lowerLimit: 0,
        upperLimit: 50000,
        rate: 0.1, // 10%
        description: 'Tax slab for income up to 50,000',
      },
      {
        lowerLimit: 50001,
        upperLimit: 100000,
        rate: 0.2, // 20%
        description: 'Tax slab for income between 50,001 and 100,000',
      },
      {
        lowerLimit: 100001,
        upperLimit: 200000,
        rate: 0.3, // 30%
        description: 'Tax slab for income between 100,001 and 200,000',
      },
      {
        lowerLimit: 200001,
        upperLimit: 500000,
        rate: 0.4, // 40%
        description: 'Tax slab for income between 200,001 and 500,000',
      },
      {
        lowerLimit: 500001,
        upperLimit: 1000000,
        rate: 0.5, // 50%
        description: 'Tax slab for income between 500,001 and 1,000,000',
      },
      {
        lowerLimit: 1000001,
        upperLimit: Infinity,
        rate: 0.6, // 60%
        description: 'Tax slab for income above 1,000,000',
      },
    ];

    const taxSlabsCollection = db.collection('taxSlabs');
    await taxSlabsCollection.insertMany(taxSlabs);

    console.log('Tax slabs seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
