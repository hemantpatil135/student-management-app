import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const FormCheckbox = ({ name, control, label, options, errors }) => {
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={field.value.includes(option)}
                      onChange={(_, checked) => {
                        const newValues = checked
                          ? [...field.value, option]
                          : field.value.filter((item) => item !== option);
                        field.onChange(newValues);
                      }}
                    />
                  }
                  label={option}
                />
              ))}
            </>
          )}
        />
      </FormGroup>
      <p style={{ color: "red", fontSize: "12px" }}>{errors[name]?.message}</p>
    </FormControl>
  );
};

export default FormCheckbox;
