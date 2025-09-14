"use client";
import React, { useState } from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import axios from "axios";

const paymentOptions = [
  { value: "rocket", label: "Rocket" },
  { value: "nagad", label: "Nagad" },
  { value: "bkash", label: "bKash" },
];
const Checkout = () => {
  const { id } = useParams();
    const [selectedPayment, setSelectedPayment] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPayment || !transactionId) {
      toast.error("Please select payment method and enter transaction ID");
      return;
    }
    // এখানে তুমি API call বা submit logic implement করতে পারো
    toast.success("Payment submitted successfully!");
    // Clear form
    setSelectedPayment(null);
    setTransactionId("");
  };

  // Fetch all courses
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allCourses"],
    queryFn: async () => {
      const res = await axios.get("/api/courses");
      return res.data;
    },
  });
  const course = courses?.find((c) => c._id === id);
  console.log('this is courses',courses,course,'this is single course');
  return (
    <section className=" my-22">
      <div className="py-9 lg:py-16 bg-gradient-to-tr from-[#fde0de] via-[#e7f3fa] to-[#e0f1ff]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-950 font-bold">
          Course Checkout
        </h3>
      </div>
      <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-custom-text mb-6">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <input
              type="text"
              value={course?.courseName || ""}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              value={`$${course?.coursePrice || "0.00"}`}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <Select
              options={paymentOptions}
              value={selectedPayment}
              onChange={setSelectedPayment}
              placeholder="Select Payment Method"
              className="text-sm"
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction ID
            </label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-custom-accent-secondary text-white font-semibold rounded-lg hover:bg-custom-accent-primary transition"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
