import React, { useEffect, useState } from "react";
import AdminService from "../services/AdminService";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        AdminService.getAllUsers()
            .then(res => {
                console.log("Users:", res.data);
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    };

    const deleteUser = (userId) => {
        AdminService.deleteUser(userId)
            .then(() => {
                loadUsers();   
            })
            .catch(err => console.log(err));
    };

    const updateStatusUser = (userId) => {
        AdminService.updateStatusUser(userId)
            .then(() => {
                loadUsers();   
            })
            .catch(err => console.log(err));
    };

    return (
        <>
        <AdminNavbar />

        <div className="container mt-4">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>        {/* 👈 added */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Acc_Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u, index) => (
                        <tr key={index}>
                            <td>{u.userId}</td>   {/* 👈 added */}
                            <td>{u.uname}</td>
                            <td>{u.email}</td>
                            <td>{u.password}</td>
                            <td>{u.mobno}</td>
                            <td>{u.role}</td>
                            <td>
                            <span
                             className={`badge ${u.accStatus ? "bg-success" : "bg-danger"}`} >
                                {u.accStatus ? "Active" : "Deactive"}
                            </span>
                        </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm "
                                    onClick={() => deleteUser(u.userId)}
                                >
                                    Deactivate
                                </button>
                                <button
                                    className="btn btn-info btn-sm "
                                    onClick={() => updateStatusUser(u.userId)}
                                >
                                    Activate
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}
