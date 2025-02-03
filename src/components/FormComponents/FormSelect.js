import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Box,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  control,
  label,
  options,
  errors,
  multiple = false,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            error={!!errors[name]}
            multiple={multiple}
            renderValue={(selected) => {
              if (multiple) {
                return (
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} sx={{ margin: "2px" }} />
                    ))}
                  </Box>
                );
              }
              return selected;
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <p style={{ color: "red", fontSize: "12px" }}>{errors[name]?.message}</p>
    </FormControl>
  );
};

export default FormSelect;
