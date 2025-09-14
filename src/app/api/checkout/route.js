import clientPromise from "@/app/lib/mongodb";


export const POST = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");
    const checkoutCollection = db.collection("checkout");

    // req.body থেকে data নিয়ে আসা
    const body = await req.json();

    // Validation (Optional)
    const { selectedPayment, transactionId, courseName, coursePrice, enrollEmail } = body;
    if (!selectedPayment || !transactionId || !courseName || !coursePrice || !enrollEmail) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    // Data insert করা
    const result = await checkoutCollection.insertOne({
      selectedPayment,
      transactionId,
      courseName,
      coursePrice,
      enrollEmail,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "Checkout data saved successfully", id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};





// GET - Get Payment History by email
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email"); // ?email=user@example.com

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");
    const checkoutCollection = db.collection("checkout");

    const payments = await checkoutCollection
      .find({ enrollEmail: email })
      .toArray();

    return new Response(JSON.stringify(payments), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};