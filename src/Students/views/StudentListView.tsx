import React from "react";
import { Link } from "react-router-dom";
import { Student } from "../entities/Student";
import { IStudentService } from "../services/StudentService";

export const StudentListViewFactory = (studentService: IStudentService) => {
  const StudentListView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [students, setStudents] = React.useState<Student[]>([]);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
      (async () => {
        try {
          const students = await studentService.getList();
          setStudents(students);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);

    if (isLoading) {
      return <div>Is loading</div>;
    }

    if (error !== null) {
      return <div>Error: {error.message}</div>;
    }

    if (!students.length) {
      return <div>You don't have any students :(</div>;
    }

    return (
      <div className="App">
        {students.map(student => {
          return (
            <div key={student.id}>
              <Link  to={`/${student.id}`}>
                <div>
                  <p>Name: {student.firstName} {student.lastName} </p>
                  <p>Age: {student.age} </p>
                </div>
              </Link>
              <Link to={`/${student.id}/edit`}>
              <p>Edit student</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  return StudentListView;
};
