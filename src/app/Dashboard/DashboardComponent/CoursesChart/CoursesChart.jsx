"use client"; // App Router এ client component বানানোর জন্য
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";

import { Chart } from "react-google-charts";
export const options = {
  title: "Courses by Category",
  pieHole: 0.5,
  is3D: true,
  colors: ["#4F46E5", "#22C55E", "#F97316", "#EF4444"],
    backgroundColor: "#f3f4f6", // works fine

};

const CoursesChart = () => {
    const { data: session, status } = useSession();

  const { data, isLoading, error } = useQuery({
    queryKey: ["aggregatedCourses", session?.user?.email],
    queryFn: async () => {
      if (!session) return [];

      const res = await axios.get("/api/courses/aggregate");

      // convert to chart format
      const data = [["Category", "Courses"]];
      res.data.forEach((item) => data.push([item.category, item.count]));
      return data;
    },
    enabled: !!session,
  });
console.log('this is data',data);
  if (status === "loading" || isLoading) return <p>Loading chart...</p>;
  if (!session) return <p>Please login to view the chart.</p>;
  if (error) return <p>Error loading chart</p>;
  return (


<div className="w-full md:max-w-6xl mx-auto p-2 sm:p-8 dark:bg-custom-accent-secondary rounded-lg lg:rounded-2xl shadow-xl mb-6">
  
  <Chart
    chartType="PieChart"
    width="100%"
    height="500px" 
    data={data}
    options={options}
    
  />
</div>




   



    
  );
};

export default CoursesChart;
