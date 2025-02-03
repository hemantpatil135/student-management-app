import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInput = ({ name, control, label, type = "text", errors }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
        />
      )}
    />
  );
};

export default FormInput;
