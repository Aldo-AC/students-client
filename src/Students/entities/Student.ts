export type Student = {
  id?: string;
  firstName: string;
  lastName: string;
  age: string;
};

export const student = () => ({
  firstName: "",
  lastName: "",
  age: "",
});
