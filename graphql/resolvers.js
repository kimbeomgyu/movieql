import { getStudents, getStudent } from "./db";

const resolvers = {
  Query: {
    students: getStudents,
    student: getStudent,
  },
};

export default resolvers;
