"use server";

import client from "@/lib/mongodb";

export async function testDatabaseConnection() {
  const isConnected = false;
  try {
    const resolvedClient = await client;
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }
    await resolvedClient.connect(process.env.MONGODB_URI);
    // Send a ping to confirm a successful connection
    if (resolvedClient.connection && resolvedClient.connection.db) {
      await resolvedClient.connection.db.admin().command({ ping: 1 });
    } else {
      throw new Error("Database connection is undefined");
    }
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}