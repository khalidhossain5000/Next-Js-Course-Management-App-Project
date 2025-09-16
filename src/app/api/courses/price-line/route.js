import clientPromise from "@/app/lib/mongodb";

export const GET = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");

    const courses = await db
      .collection("courses")
      .find({}, { projection: { courseName: 1, coursePrice: 1, _id: 0 } })
      .toArray();

    // convert price to number
    const result = courses.map((course) => ({
      courseName: course.courseName,
      coursePrice: Number(course.coursePrice || 0),
    }));

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch course prices" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
