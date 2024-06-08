import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const ProfilePage = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="page">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="cust_btn">Edit</button>
                </td>
                <td>
                  <button className="cust_btn">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
