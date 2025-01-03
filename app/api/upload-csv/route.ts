import { MongoClient } from "mongodb";

// Replace with your Hugging Face API endpoint
const huggingFaceAPIUrl = "https://ayush-003-taxview.hf.space/analyze";
const client = new MongoClient(process.env.MONGODB_URI!);

// POST Request to handle file upload and send data to Hugging Face API
export async function POST(req: Request) {
    try {
      const formData = await req.formData();
      const file = formData.get("file");
  
      if (!file) {
        return new Response(
          JSON.stringify({ success: false, error: "No file uploaded" }),
          { status: 400 }
        );
      }
  
      // Prepare the form data to send to Hugging Face API
      const formDataToSend = new FormData();
      formDataToSend.append("file", file); // Append the file as part of the form data
  
      // Send POST request to Hugging Face API
      const response = await fetch(huggingFaceAPIUrl, {
        method: "POST",
        body: formDataToSend, // Send the form data containing the file
      });
  
      if (!response.ok) {
        throw new Error("Failed to send data to Hugging Face API");
      }
  
      // Get the response from Hugging Face API
      const responseData = await response.json();
  
      // Return the response from Hugging Face API to the client
      return new Response(
        JSON.stringify({ success: true, data: responseData }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error processing the file:", error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to process the file." }),
        { status: 500 }
      );
    }
  }
// GET Request to fetch tax slabs from MongoDB (no change needed here)
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
    console.error("Error fetching tax slabs:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to fetch tax slabs." }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
