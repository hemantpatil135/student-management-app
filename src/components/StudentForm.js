import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils/validation";
import { COURSES, INTERESTS_LIST, SKILLS_LIST } from "../constants/constants";
import FormInput from "./FormComponents/FormInput";
import FormRadio from "./FormComponents/FormRadio";
import FormSelect from "./FormComponents/FormSelect";
import FormCheckbox from "./FormComponents/FormCheckbox";

const StudentForm = ({ onSubmit, editData }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      gender: "",
      course: "",
      skills: [],
      interests: [],
    },
  });

  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <FormInput name="name" control={control} label="Name" errors={errors} />

      <FormInput name="email" control={control} label="Email" errors={errors} />

      <FormInput
        name="age"
        control={control}
        label="Age"
        type="number"
        errors={errors}
      />

      <FormRadio
        name="gender"
        control={control}
        label="Gender"
        options={["Male", "Female"]}
        errors={errors}
      />

      <FormSelect
        name="course"
        control={control}
        label="Course"
        options={COURSES}
        errors={errors}
      />

      <FormSelect
        name="skills"
        control={control}
        label="Skills"
        options={SKILLS_LIST}
        errors={errors}
        multiple={true}
      />

      <FormCheckbox
        name="interests"
        control={control}
        label="Select Interests"
        options={INTERESTS_LIST}
        errors={errors}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default StudentForm;
