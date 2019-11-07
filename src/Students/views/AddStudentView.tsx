import * as React from "react";
import { IStudentService } from "../services/StudentService";
import { useHistory } from "react-router";
import { AddStudentForm } from "../components/AddStudentForm";

export const AddStudentViewFactory = (studentService: IStudentService) => {
  const AddStudentView = () => {
    const history = useHistory();

    const handleSubmitAddStudentForm = async (student: any) => {
      student.preventDefault();
      const { target } = student;
      const firstName = target.firstName.value;
      const lastName = target.lastName.value;
      const age = target.age.value;

      await studentService.createOne({ firstName, lastName, age });
      history.replace("/");
    };

    return (
      <div>
        <AddStudentForm onSubmit={handleSubmitAddStudentForm} />
      </div>
    );
  };

  return AddStudentView;
};
