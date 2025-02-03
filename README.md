# Student Management App

This is a simple **Student Management** app built with **React** and **Material-UI** that allows users to add, edit, delete, and view students' details. The app includes features like form validation, reusable components, and multi-select functionality.

## Features

- **Add Student**: Fill in the student details like name, email, age, gender, course, skills, and interests.
- **Edit Student**: Modify the details of existing students.
- **Delete Student**: Remove a student from the list.
- **Validation**: Forms are validated using **Yup** and **React Hook Form**.
- **Reusable Components**: Custom form components for input fields, radio buttons, selects, checkboxes, etc.
- **Responsive**: The app is fully responsive and works across all devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: A popular React component library to implement the UI.
- **React Hook Form**: Library for managing form state and validation.
- **Yup**: Schema validation library for handling form validation.
- **MUI X DataGrid**: A highly customizable data grid component for rendering the student list.
- **Styled Components (optional)**: For styling the components (if used).

## Project Setup

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/hemant419/student-management-app.git
```

### 2. Install dependencies

Navigate to the project directory and run:

```bash
npm install
```

### 3. Run the application

Start the app locally:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

## Folder Structure

```
src/
├── components/
│   ├── FormComponents/
│   │   ├── FormInput.js
│   │   ├── FormRadio.js
│   │   ├── FormSelect.js
│   │   └── FormCheckbox.js
│   ├── StudentForm.js
│   ├── StudentTable.js
├── constants/
│   └── constants.js
├── utils/
│   └── validation.js
├── App.js
└── index.js
```

- **`components/`**: Contains all the React components used for the form and table.
  - `StudentForm.js`: The main form for adding and editing students.
  - `StudentTable.js`: Displays the list of students.
  - `FormInput.js`: A reusable input field component using Material-UI's `TextField`.
  - `FormRadio.js`: A reusable radio button component for gender selection.
  - `FormSelect.js`: A reusable select component, supporting both single and multi-selection.
  - `FormCheckbox.js`: A reusable checkbox component for selecting interests.
- **`constants/`**: Contains constants like list of courses, skills, and interests.
  - `constants.js`: Contains predefined values used in the form.
- **`utils/`**: Contains utility files like validation schema.
  - `validation.js`: The validation schema using `Yup` for form fields.

## Custom Components

### **Form Components**:

- **FormInput**: A reusable input field component using Material-UI's `TextField`.
- **FormRadio**: A reusable radio button component for gender selection.
- **FormSelect**: A reusable select component, supporting both single and multi-selection.
- **FormCheckbox**: A reusable checkbox component for selecting interests.

### **StudentTable**:

- Displays the list of students in a table format.
- Users can **edit** or **delete** a student using the provided actions.

## Features and Functionality

### **Add a Student**:

- Clicking the "Add Student" button will display a form to add a new student.
- The form includes fields such as name, email, age, gender, course, skills, and interests.
- On form submission, the student is added to the student list.

### **Edit a Student**:

- Users can click on the "Edit" button next to a student in the list.
- The form will pre-fill with the student's current data.
- Users can modify the data and submit the changes.

### **Delete a Student**:

- Users can delete a student by clicking on the "Delete" button next to their name in the list.
- The student will be removed from the list upon confirmation.

### **Validation**:

- All form fields are validated using `Yup` schema validation with `React Hook Form`.
- The fields include `name`, `email`, `age`, `gender`, `course`, `skills`, and `interests`.

### **Multi-Select**:

- The "Skills" and "Interests" fields support multi-selection, allowing users to select multiple values at once.

## Acknowledgements

- **Material-UI**: For the UI components.
- **React Hook Form**: For managing form state and validation.
- **Yup**: For schema validation in forms.
