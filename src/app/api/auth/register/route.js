import clientPromise from "../../../lib/mongodb";

import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("Next-Js-Course-Management-Project"); // change this to your DB name

    const body = await req.json();
    const { name, email, password, profileImage } = body;

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = {
      name,
      email,
      password: hashedPassword,
      profileImage: profileImage || null,
      createdAt: new Date(),
    };

    // Insert user into DB
    const result = await db.collection("users").insertOne(newUser);

    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
