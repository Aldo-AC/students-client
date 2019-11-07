import * as React from "react";
import { SaveButton } from "../atoms/SaveButton";

export interface IStudentFormProps {
  studentFirstName: string;
  studentLastName: string;
  studentAge: string;
  onChange: (student: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSave: (student: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StudentForm: React.FC<IStudentFormProps> = ({ studentFirstName, studentLastName, studentAge, onChange, onClickSave }) => {
  return (
    <div>
      <form id="createEventForm">
        <label>
          Name
          <input
            name="firstName"
            id="editStudentForm-studentFirstName"
            type="text"
            required
            onChange={onChange}
            value={studentFirstName}
          />
          <input
            name="lastName"
            id="editStudentForm-studentLastName"
            type="text"
            required
            onChange={onChange}
            value={studentLastName}
          />
        </label>
        <label>
          Age
          <input
            name="age"
            id="editStudentForm-studentAge"
            type="text"
            required
            onChange={onChange}
            value={studentAge}
          />
        </label>

        <SaveButton onClick={onClickSave}>Save</SaveButton>
      </form>
    </div>
  );
};
