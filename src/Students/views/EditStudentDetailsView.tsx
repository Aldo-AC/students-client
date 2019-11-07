import * as React from "react";
import { IStudentService } from "../services/StudentService";
import { Student, student } from "../entities/Student";
import { useParams } from "react-router";
import { assoc } from "lodash/fp";
import { StudentForm } from "../components/EditStudentForm";

export const EditStudentDetailsViewFactory = (studentService: IStudentService) => {
  const EditStudentDetailsView = () => {
    const { id } = useParams();
    const [studentDetails, setStudentDetails] = React.useState<Student>(student());

    React.useEffect(() => {
      (async () => {
        const studentDetails = await studentService.getOneById(String(id));
        setStudentDetails(studentDetails);
      })();
    }, [id]);

    const handleChange = (student: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value, name },
      } = student;
      setStudentDetails(assoc(name, value, studentDetails));
    };

    const handleClickSave = (student: React.MouseEvent<HTMLButtonElement>) => {
      (async () => {
        student.preventDefault();
        await studentService.save(studentDetails);
        alert("saved!");
      })();
    };

    return (
      <div>
        <StudentForm
          studentFirstName={studentDetails.firstName}
          studentLastName={studentDetails.lastName}
          studentAge={studentDetails.age}
          onChange={handleChange}
          onClickSave={handleClickSave}
        />
      </div>
    );
  };

  return EditStudentDetailsView;
};
