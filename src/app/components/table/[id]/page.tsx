"use client";
import { useDispatch, useSelector } from "react-redux";
import { arr } from "@/redux/apislice";
import { SingleData } from "@/redux/singleDataSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import Tracker from "@/app/tracker/page";

interface Params {
  id: string;
  details: string;
}
// Define the type for the props of the Details component
interface DetailsProps {
  params: Params;
}

const Details: React.FC<DetailsProps> = ({ params }) => {
  const dispatch: AppDispatch = useDispatch();
  const dataarr = useSelector((state: RootState) => state.single.dataarr);
  const id = Number(params.id);
  // const myarr = useSelector((state: RootState) => state.calls.myarr);

  // useEffect(() => {
  //   const a = dispatch(SingleData(params.details));
  //   console.log(a);
  // }, [dispatch, params.details]);
  // const items = useSelector((state: any) => state.calls.myarr);
  let data = dataarr.find((item: arr) => item.id === id);

  const fetchusers = async () => {
    if (!data) {
      await dispatch(SingleData(id));
    }
  };

  useEffect(() => {
    fetchusers();
  }, [id]);

  // const items =
  //   data || dataarr.find((item: any) => item.id === parseInt(params.id));

  if (!data) return <p>Not Found</p>;

  return (
    <>
      <h1>Details of:{params.id}</h1>
      {data && (
        <ul key={data.id}>
          <li>{data.id}</li>
          <li>{data.name}</li>
        </ul>
      )}
      <Tracker ids={id}></Tracker>
    </>
  );
};

export default Details;
