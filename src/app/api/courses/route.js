import clientPromise from "@/app/lib/mongodb";


export async function POST(req) {
  try {
    const body = await req.json(); // ফর্ম থেকে আসা ডেটা

    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project"); 
    const collection = db.collection("courses");

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
