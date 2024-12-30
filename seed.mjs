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
    
    // Seed data
    const fraudCases = [
      {
        title: 'Ponzi Scheme Investigation',
        year: 2020,
        amountDefrauded: 500000,
        description: 'A fraudulent investment operation where returns were paid to earlier investors using the capital from new investors.',
      },
      {
        title: 'Corporate Tax Evasion Case',
        year: 2022,
        amountDefrauded: 1200000,
        description: 'A corporation misreported their financial earnings to evade paying taxes.',
      },
      {
        title: 'Money Laundering Network',
        year: 2021,
        amountDefrauded: 850000,
        description: 'A complex network used to launder money through shell companies.',
      },
    ];

    const fraudCasesCollection = db.collection('fraudCases');
    await fraudCasesCollection.insertMany(fraudCases);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
