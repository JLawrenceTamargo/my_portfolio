import { useState } from "react";

const DisplayList = () => {
    const [teachers] = useState(
        [
            {id:1, firstname: "Jhon1", lastname: "Tamargo1",
            email: "jtamargo1@email.com", subject:"Computer"},
            {id:2, firstname: "Jhon2", lastname: "Tamargo2",
            email: "jtamargo2@email.com", subject:"Math"},
            {id:3, firstname: "Jhon3", lastname: "Tamargo3",
            email: "jtamargo3@email.com", subject:"English"},
            {id:4, firstname: "Jhon4", lastname: "Tamargo4",
            email: "jtamargo4@email.com", subject:"Science"},
            {id:5, firstname: "Jhon5", lastname: "Tamargo5",
            email: "jtamargo5@email.com", subject:"Cooking"}
        ]
    )
    return (
        <>
            <table className="w-100 table table-striped table-bordered text-light text-center">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    {teachers.map(teacher =>
                    <tr>
                        <td>{teacher.firstname}</td>
                        <td>{teacher.lastname}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.subject}</td>
                    </tr>
                        )}
            </table>
        </>
    )
}
export default DisplayList