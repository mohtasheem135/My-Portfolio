// app/api/leetcode/route.js
import { NextResponse } from "next/server";

// Define the API route
export async function GET() {
  const query = `
  {
    matchedUser(username: "mohtasheem135") {
      username
      profile {
        reputation
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    // Send the response back to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
