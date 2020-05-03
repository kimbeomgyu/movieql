const Student = [
  { id: 1, name: "A", age: 10, gender: "man" },
  { id: 2, name: "B", age: 15, gender: "woman" },
  { id: 3, name: "C", age: 19, gender: "man" },
  { id: 4, name: "D", age: 12, gender: "woman" },
  { id: 5, name: "E", age: 16, gender: "woman" },
  { id: 6, name: "F", age: 17, gender: "man" },
  { id: 7, name: "G", age: 22, gender: "woman" },
  { id: 8, name: "H", age: 9, gender: "woman" },
];

export function getStudents() {
  return Student;
}
export function getStudent(_, { id }) {
  return Student.filter(({ id: uid }) => uid === id)[0];
}
