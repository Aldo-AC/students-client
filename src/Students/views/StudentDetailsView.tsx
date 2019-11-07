import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Student, student } from "../entities/Student";
import { IStudentService } from "../services/StudentService";

export const StudentDetailsViewFactory = (studentService: IStudentService) => {
  const StudentDetailsView = () => {
    const { id } = useParams();
    const [studentDetails, setStudentDetails] = React.useState<Student>(student());

    React.useEffect(() => {
      (async () => {
        const studentData = await studentService.getOneById(String(id));
        setStudentDetails(studentData);
      })();
    }, [id]);

    return (
      <div>
        <p>id: {studentDetails.id}</p>
        <p>name: {studentDetails.firstName} {studentDetails.lastName}</p>
        <p>age: {studentDetails.age}</p>
        <Link to={`/${studentDetails.id}/edit`}>
          <p>Edit student</p>
        </Link>
      </div>
    );
  };

  return StudentDetailsView;
};
