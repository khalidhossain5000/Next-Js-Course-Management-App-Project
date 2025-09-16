import clientPromise from "@/app/lib/mongodb";

export const GET = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project");

    const coursesByCategory = await db
      .collection("courses")
      .aggregate([
        { $group: { _id: "$courseCategory", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    const result = coursesByCategory.map((item) => ({
      category: item._id || "Uncategorized",
      count: item.count,
    }));

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch courses" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
