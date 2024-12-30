import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("forensicsDB");
  
        const { suspiciousEntity, description } = await request.json();
        const fraudLikelihood = Math.floor(Math.random() * 100);
  
        const report = {
          suspiciousEntity,
          description,
          fraudLikelihood,
          reportedAt: new Date(),
        };
  
        await db.collection("fraudReports").insertOne(report);
        return new Response(JSON.stringify({ success: true, report }), { status: 201 });
      } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
}  // Adjust the import path as per your project structure.

export async function GET() {
  try {
    // Establish a connection to the MongoDB client.
    const client = await clientPromise;
    const db = client.db("forensicsDB");

    // Fetch all documents from the 'fraudCases' collection.
    const reports = await db.collection("fraudCases").find().toArray();

    // Return the data as a JSON response with a 200 status code.
    return new Response(JSON.stringify(reports), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching fraud cases:", error);

    // Return an error response with a 500 status code.
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
