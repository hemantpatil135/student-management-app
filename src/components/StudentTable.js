import React, { memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentTable = memo(({ students, onEdit, onDelete }) => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", width: 70, flex: 1 },
    { field: "name", headerName: "Name", width: 150, flex: 2 },
    { field: "email", headerName: "Email", width: 200, flex: 3 },
    { field: "age", headerName: "Age", width: 100, flex: 1 },
    { field: "gender", headerName: "Gender", width: 120, flex: 1 },
    { field: "course", headerName: "Course", width: 150, flex: 2 },
    {
      field: "skills",
      headerName: "Skills",
      width: 180,
      renderCell: (params) => params.value.join(", "),
      flex: 2,
    },
    {
      field: "interests",
      headerName: "Interests",
      width: 180,
      renderCell: (params) => params.value.join(", "),
      flex: 2,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => onEdit(params.row)}
            color="primary"
            size="small"
            style={{ marginRight: 5 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => onDelete(params.row)}
            color="secondary"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <DataGrid
        rows={students}
        columns={columns}
        autoHeight
        disableColumnMenu
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            textAlign: "center",
          },
          [theme.breakpoints.down("sm")]: {
            "& .MuiDataGrid-cell": {
              fontSize: "0.875rem",
            },
            "& .MuiDataGrid-columnHeaders": {
              padding: "8px 0",
            },
          },
        }}
      />
    </div>
  );
});
export default StudentTable;
