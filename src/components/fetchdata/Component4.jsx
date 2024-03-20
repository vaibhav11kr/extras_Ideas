import React, { useEffect, useState } from "react";

const Component4 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error){
        setError(error)
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-4 border-2 p-2 border-green-600">
      <h1>Hello There !</h1>
      <p>lets learn some data fetching and use of "useEffect"</p>
      <ul>{loading ? (
          <p>Loading...</p>
        ) : (
          data.map((comments) => (
            <li key={comments.id} className="border border-red-500 mb-4">
              <h1>{comments.id}</h1>
              <p>"Post Id: {comments.postId}"</p>
              <p>"Name: {comments.name}"</p>
              <p>"Email: {comments.email}"</p>
              <p>"Body: {comments.body}"</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Component4;
