# Student Management App

A small CRUD app for managing student records, built with React 19, Material UI and MUI X DataGrid. Its forms use **React Hook Form** and **Yup**, with a set of reusable, controlled MUI form components.

## Features

- **Add, edit and delete students.** One form handles both create and edit. On edit it's pre-filled with the selected record.
- **Student list in MUI X DataGrid** with edit and delete actions on each row.
- **Schema validation with Yup:**
  - name and email are required, and the email must be a valid address
  - age must be a positive whole number
  - gender and course are required
  - at least one skill and at least one interest must be selected
- **Reusable form controls.** `FormInput`, `FormRadio`, `FormSelect` (single or multiple choice) and `FormCheckbox` wrap MUI inputs in React Hook Form's `Controller`, so every field shows its own validation error.
- **Constants-driven options.** Course, skill and interest options live in `src/constants/constants.js`.

## Tech stack

React 19 · Material UI 6 · MUI X DataGrid 7 · React Hook Form 7 · Yup · Create React App

## Getting started

```bash
git clone https://github.com/hemantpatil135/student-management-app.git
cd student-management-app
npm install
npm start          # http://localhost:3000
```

No environment variables are needed. Data lives in component state, so a page refresh clears it.

## Project structure

```
src/
├── components/
│   ├── FormComponents/
│   │   ├── FormInput.js       # TextField + Controller
│   │   ├── FormRadio.js       # RadioGroup (gender)
│   │   ├── FormSelect.js      # Select, single or multiple
│   │   └── FormCheckbox.js    # checkbox group (interests)
│   ├── StudentForm.js         # add/edit form wired to the Yup schema
│   └── StudentTable.js        # DataGrid list with row actions
├── constants/constants.js     # course, skill and interest options
├── utils/validation.js        # Yup schema
└── App.js                     # list/form toggle and CRUD state
```

## How it works

`App.js` owns the `students` array and decides whether the list or the form is showing. `StudentForm` runs `useForm` with `yupResolver(validationSchema)` and resets to the selected record when editing. Each field component receives `control` and `errors`, which keeps the form itself declarative.

## Known limitations and next steps

- New IDs come from `students.length + 1`, which can repeat after a delete. Switch to `crypto.randomUUID()`.
- Delete happens immediately. Add a confirmation dialog.
- Persist data (localStorage or a small API) so it survives a refresh
- Add tests for the schema and the add/edit flow
- Migrate to Vite and TypeScript
