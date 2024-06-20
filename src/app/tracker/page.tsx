"use client";

import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useSelector, useDispatch } from "react-redux";
import { addreducer, subreducer, resetreducer } from "@/redux/countslice";
import { useRouter } from "next/navigation";

interface CounterProps {
  ids: number;
}

const Tracker: React.FC<CounterProps> = ({ ids }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.track.count[ids] || 0);
  const route = useRouter();

  const like = () => {
    dispatch(addreducer(ids));
  };
  const dislike = () => {
    dispatch(subreducer(ids));
  };
  const reset = () => {
    dispatch(resetreducer(ids));
  };
  const routerrr = () => {
    route.push("/");
  };

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={like}>
        <ThumbUpIcon></ThumbUpIcon>
      </button>
      <button onClick={dislike}>
        <ThumbDownIcon></ThumbDownIcon>
      </button>
      <br></br>
      <button onClick={reset}>Reset Counter</button>
      <button onClick={routerrr}>Move to 2nd Page</button>
    </div>
  );
};

export default Tracker;
