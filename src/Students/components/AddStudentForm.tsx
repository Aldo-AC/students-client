import * as React from "react";
import { Button } from "../../shared/atoms/Button";

export interface IStudentFormProps {
  onSubmit: (student: React.FormEvent) => void;
}

export const AddStudentForm: React.FC<IStudentFormProps> = ({ onSubmit }) => {
  return (
    <div>
      <form id="createStudentForm" onSubmit={onSubmit}>
        <div>
          <label>
            First Name
            <input name="firstName" id="createStudentForm-firstName" type="text" required />
          </label>
        </div>
        <br/>
        <div>
          <label>
            Last Name
            <input name="lastName" id="createStudentForm-lastName" type="text" required />
          </label>
        </div>
        <br/>
        <div>
          <label>
            Age
            <input name="age" id="createStudentForm-age" type="text" required />
          </label>
        </div>
        <br/>
        <Button>Create student</Button>
      </form>
    </div>
  );
};
