"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const MyPaymentHistory = () => {
  const { data: session } = useSession();

  // 🔹 Fetch payments with TanStack
  const { data: payments, isLoading, isError } = useQuery({
    queryKey: ["payments", session?.user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `/api/checkout?email=${session?.user?.email}`
      );
      return res.data;
    },
    enabled: !!session?.user?.email, // ✅ শুধু তখনই fetch হবে যখন email থাকবে
  });

  if (isLoading) {
    return (
      <Box textAlign="center" py={4}>
        <Typography>Loading payment history...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" py={4}>
        <Typography color="error">Failed to load payments</Typography>
      </Box>
    );
  }

  return (
    <div className="bg-light-secondary min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-light-text mb-6 text-xl lg:text-3xl font-primary">
          My Payment History
        </h1>

        {payments && payments.length > 0 ? (
          <TableContainer component={Paper} elevation={2}>
            <Table sx={{ minWidth: 650 }} aria-label="payment history table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Course Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Payment Method</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Transaction ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>User Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((p) => (
                  <TableRow key={p._id} hover>
                    <TableCell sx={{ fontWeight: "medium" }}>
                      {p.courseName}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#3B82F6" }}>
                      ${p.coursePrice}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={p?.selectedPayment?.label || "N/A"}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>{p.transactionId}</TableCell>
                    <TableCell>{p.enrollEmail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="textSecondary">
              No payments found
            </Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

export default MyPaymentHistory;
