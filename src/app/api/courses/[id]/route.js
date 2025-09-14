import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

// GET method
export async function GET(req, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid course ID" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");
    const coursesCollection = db.collection("courses");

    const course = await coursesCollection.findOne({ _id: new ObjectId(id) });
    if (!course) {
      return new Response(JSON.stringify({ message: "Course not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// PATCH method
export async function PATCH(req, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid course ID" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");
    const coursesCollection = db.collection("courses");

    const body = await req.json(); // App Router এ req.body fetch এভাবে করতে হবে

    const result = await coursesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "Course not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Course updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}











//DELETE API
// DELETE method using arrow function
export const DELETE = async (req, { params }) => {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid course ID" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");
    const coursesCollection = db.collection("courses");

    const result = await coursesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "Course not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Course deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
