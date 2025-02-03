import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .positive()
    .integer(),
  gender: yup.string().required("Gender is required"),
  course: yup.string().required("Course selection is required"),
  skills: yup.array().min(1, "Select at least one skill"),
  interests: yup.array().min(1, "Select at least one interest"),
});
