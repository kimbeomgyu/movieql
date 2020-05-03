const Student = {
  name: "A",
  age: 10,
  gender: "man",
};

const resolvers = {
  Query: {
    student: () => Student,
  },
};

export default resolvers;
