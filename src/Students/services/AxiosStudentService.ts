import axios from "axios";
import { Student } from "../entities/Student";
import { IStudentService } from "./StudentService";

// factory function
export const AxiosStudentService = (): IStudentService => {
  const createOne = async (student: Student): Promise<Student> => {
    const res = await axios.post("http://localhost:3001/api/students", student);
    return Promise.resolve(res.data as Student);
  };

  const getList = async () => {
    const res = await axios.get("http://localhost:3001/api/students");
    return Promise.resolve(res.data.students);
  };

  const getOneById = async (id: string) => {
    const res = await axios.get(`http://localhost:3001/api/students/${id}`);
    return Promise.resolve(res.data);
  };

  const save = async (student: Student): Promise<Student> => {
    const res = await axios.put(`http://localhost:3001/api/students/${student.id}`, student);
    return Promise.resolve(res.data);
  };

  return {
    createOne,
    getList,
    getOneById,
    save,
  };
};
