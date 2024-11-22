import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function LeetCodeStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    const cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const storedData = localStorage.getItem("leetcodeData");
    const storedTime = localStorage.getItem("leetcodeDataTime");

    const currentTime = new Date().getTime();

    // Check if data exists and if it's still valid
    if (storedData && storedTime && currentTime - storedTime < cacheExpiry) {
      setData(JSON.parse(storedData));
    } else {
      // Fetch data if not cached or expired
      const fetchData = async () => {
        try {
          const res = await fetch("/api/leetcode");
          const result = await res.json();

          if (res.ok) {
            const userData = result.data.matchedUser;
            setData(userData);
            // Save data and timestamp to localStorage
            localStorage.setItem("leetcodeData", JSON.stringify(userData));
            localStorage.setItem("leetcodeDataTime", currentTime);
          } else {
            setError(result.error);
          }
        } catch (err) {
          setError("Failed to fetch data.", err);
        }
      };

      fetchData();
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // const { username, profile, submitStatsGlobal } = data;
  const { submitStatsGlobal } = data;

  const ChartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [
          submitStatsGlobal?.acSubmissionNum[1].count,
          submitStatsGlobal?.acSubmissionNum[2].count,
          submitStatsGlobal?.acSubmissionNum[3].count,
        ], 
        backgroundColor: ["#5cb85c", "#f0ad4e", "#d9534f"],
        borderAlign: "inner",
        borderJoinStyle: "bevel",
        borderRadius: { outerEnd: 5, innerStart: 5 },
        borderWidth: 1,
        hoverBorderWidth: 3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    cutout: 70, // Set the cutout value to decrease the radius
  };

  return (
    <div className="flex flex-col justify-center items-center h-full mt-[30px] sm:mt-0">
      
      {/* <h2>LeetCode Stats for {username}</h2>
      <p>Reputation: {profile.reputation}</p>
      <p>Ranking: {profile.ranking}</p>
      <h3>Submission Stats:</h3> */}
      {/* <ul>
        {submitStatsGlobal.acSubmissionNum.map((item) => (
          <li key={item.difficulty}>
            {item.difficulty}: {item.count} problems solved
          </li>
        ))}
      </ul> */}
      <div className="w-full h-[300px] flex justify-center items-center">
        <Doughnut data={ChartData} options={options} />
      </div>
      <div className="absolute">
        <p className="mt-[30px] font-semibold">
          Total: {submitStatsGlobal?.acSubmissionNum[0].count}
        </p>
      </div>
      {/* <div className="">
        <p className="mt-[20px] font-semibold">Ranking: {profile.ranking}</p>
      </div> */}
    </div>
  );
}
