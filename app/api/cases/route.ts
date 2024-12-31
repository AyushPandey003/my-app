import FraudReport from "@/models/fraudReport";
import clientPromise from "@/lib/mongodb"; // If you need to ensure MongoDB connection setup

export async function POST(request: Request) {
  try {
    // Connect to the MongoDB database using mongoose
    await clientPromise;

    const { suspiciousEntity, description } = await request.json();

    const fraudLikelihood = Math.floor(Math.random() * 100);

    // Create a new fraud report using Mongoose
    const newReport = new FraudReport({
      suspiciousEntity,
      description,
      fraudLikelihood,
    });

    // Save the new report to the database
    await newReport.save();

    return new Response(
      JSON.stringify({ success: true, report: newReport }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    // Connect to the MongoDB database using mongoose
    await clientPromise;

    // Fetch all fraud reports from the database
    const reports = await FraudReport.find();

    return new Response(JSON.stringify(reports), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching fraud cases:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
