"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Alert,
} from "@mui/material";

import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi"; // <-- React Icon
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const AllCourses = () => {
  const queryClient = useQueryClient();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  // Delete course mutation
  const deleteCourseMutation = useMutation({
    mutationFn: async (courseId) => {
      const res = await axios.delete(`/api/courses/${courseId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Course deleted successfully!");
      queryClient.invalidateQueries(["allCourses"]);
      setDeleteDialogOpen(false);
      setSelectedCourse(null);
    },
    onError: (error) => {
      toast.error("Failed to delete course");
      console.error("Error deleting course:", error);
    },
  });

  const handleDelete = (courseId) => {
    setSelectedCourse(courses.find((c) => c._id === courseId));
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedCourse) {
      deleteCourseMutation.mutate(selectedCourse._id);
    }
  };

  if (error)
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Error loading courses: {error.message}
      </Alert>
    );

  return (
    <div className="bg-light-secondary min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-light-text mb-6 text-xl lg:text-3xl font-primary">
          All Courses
        </h1>

        {courses && courses.length > 0 ? (
          <TableContainer component={Paper} elevation={2}>
            <Table sx={{ minWidth: 650 }} aria-label="all courses table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Course Image
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Course Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Instructor</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course._id} hover>
                    <TableCell>
                      <Avatar
                        src={course.courseImage}
                        alt={course.courseName}
                        sx={{ width: 50, height: 50 }}
                        variant="rounded"
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: "medium" }}>
                      {course.courseName}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={course?.courseCategory}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>{course?.instructorName}</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "#3B82F6" }}>
                      ${course?.coursePrice || 0}
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={1}>
                        <Tooltip title="Delete Course">
                          <button
                            onClick={() => handleDelete(course._id)}
                            className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                          >
                            <FiTrash2 className="w-5 h-5" />
                            Delete
                          </button>
                        </Tooltip>
                        <Tooltip title="Update Course">
                          <button
                            onClick={() => handleUpdate(course._id)}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            <FiEdit2 className="w-5 h-5" />
                            Update
                          </button>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="textSecondary">
              No courses found
            </Typography>
          </Box>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography></Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={confirmDelete}
              color="error"
              variant="contained"
              disabled={deleteCourseMutation.isPending}
            >
              {deleteCourseMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AllCourses;
