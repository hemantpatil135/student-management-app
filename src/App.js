import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleStudentAction = (action, student = null) => {
    if (action === "edit" && student) {
      setEditData(student);
      setShowForm(true);
    } else if (action === "delete" && student) {
      setStudents((prevStudents) =>
        prevStudents.filter((s) => s.id !== student.id)
      );
    } else if (action === "add") {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (data) => {
    if (editData) {
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s.id === editData.id ? { ...s, ...data } : s))
      );
      setEditData(null);
    } else {
      setStudents((prevStudents) => [
        ...prevStudents,
        { id: prevStudents.length + 1, ...data },
      ]);
    }
    setShowForm(false);
  };

  const handleBack = () => {
    setShowForm(false);
    setEditData(null);
  };

  return (
    <Box sx={{ padding: "20px", width: "full" }}>
      <Button
        onClick={() => (showForm ? handleBack() : handleStudentAction("add"))}
        variant="contained"
        color="primary"
        style={{
          display: "inline-block",
          margin: "20px 0",
          float: "right",
        }}
      >
        {showForm ? "Back" : "Add Student"}
      </Button>
      <div style={{ clear: "both" }}></div>
      {showForm ? (
        <div>
          <h2 style={{ textAlign: "center" }}>Student Form</h2>
          <StudentForm onSubmit={handleFormSubmit} editData={editData} />
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Student List</h2>
          <StudentTable
            students={students}
            onEdit={(student) => handleStudentAction("edit", student)}
            onDelete={(student) => handleStudentAction("delete", student)}
          />
        </>
      )}
    </Box>
  );
};

export default App;
