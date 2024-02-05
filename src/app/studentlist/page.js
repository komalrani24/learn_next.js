import Link from "next/link";
import React from "react";

const StudentList = () => {
  const student = [
    { id: 1, name: "anil" },
    { id: 2, name: "peter" },
    { id: 3, name: "rekha" },
    { id: 4, name: "sonia" },
  ];
  console.log(student);
  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        {student.map((value) => (
          <li key={value.id}>
            <Link href={`/studentlist/${value.id}`}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
