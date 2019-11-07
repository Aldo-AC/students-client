import { Student } from "../entities/Student";

export interface IStudentService {
  createOne: (student: Student) => Promise<Student>;
  getList: () => Promise<Student[]>;
  getOneById: (id: string) => Promise<Student>;
  save: (student: Student) => Promise<Student>;
}
