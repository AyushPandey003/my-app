import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("forensicsDB");

    // Fetch tax slabs from MongoDB
    const taxSlabs = await db.collection("taxSlabs").find().toArray();

    // Return tax slabs
    return new Response(
      JSON.stringify({ success: true, slabs: taxSlabs }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to fetch tax slabs." }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
