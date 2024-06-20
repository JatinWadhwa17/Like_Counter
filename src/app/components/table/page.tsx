"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, arr } from "@/redux/apislice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";

const Table = () => {
  const dispatch: AppDispatch = useDispatch();
  const route = useRouter();

  const data = useSelector((state: RootState) => state.calls.myarr);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleView = (item: arr) => {
    route.push("./components/table/" + item.id);
  };

  return (
    <div>
      <h1>Data Table</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handleView(item)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Table;
