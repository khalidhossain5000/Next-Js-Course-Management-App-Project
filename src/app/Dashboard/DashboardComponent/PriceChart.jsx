'use client'
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Chart } from "react-google-charts";

export const options = {
  title: "Course Prices",
  hAxis: {
    title: "Course Name",
    slantedText: true,
    slantedTextAngle: 45,
  },
  vAxis: {
    title: "Price",
  },
  legend: { position: "none" },
  colors: ["#4F46E5"],
  chartArea: { width: "80%", height: "70%" },
};
const PriceChart = () => {
   const { data: chartData, isLoading, error } = useQuery({
    queryKey: ["coursePrices"],
    queryFn: async () => {
      const res = await axios.get("/api/courses/price-line");
      // convert to Google Chart format: [["Course Name", "Price"], ...]
      const data = [["Course Name", "Price"]];
      res.data.forEach((course) => data.push([course.courseName, course.coursePrice]));
      return data;
    },
  });

  if (isLoading) return <p>Loading price chart...</p>;
  if (error) return <p>Error loading chart</p>;

  return (
    <div className="w-full max-w-xl md:max-w-6xl mx-auto p-2 sm:p-6 lg:p-8 bg-white dark:bg-custom-accent-secondary rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Course Prices
      </h2>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
    );
};

export default PriceChart;