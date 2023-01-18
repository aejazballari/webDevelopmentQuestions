import { useState, useEffect } from "react";
import useFetch from "../../custom-hooks/useFetch";

const api = "https://jsonplaceholder.typicode.com/todos";

const InfiniteScroll = () => {
  const [data] = useFetch(api);
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ textAlign: "center", padding: "10px" }}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
export default InfiniteScroll;
