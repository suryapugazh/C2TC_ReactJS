import React, { useState, useEffect } from "react";
import axios from "axios";

const withHttpRequests = (WrappedComponent, apiUrl) => {
  const WithHttpRequests = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const addData = async (newItem) => {
      try {
        const response = await axios.post(apiUrl, newItem);
        setData([response.data, ...data]);
      } catch (err) {
        setError(err);
      }
    };

    const updateData = async (id, updatedItem) => {
      try {
        const response = await axios.put(`${apiUrl}/${id}`, updatedItem);
        setData(data.map((item) => (item.id === id ? response.data : item)));
      } catch (err) {
        setError(err);
      }
    };

    const deleteData = async (id) => {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        setData(data.filter((item) => item.id !== id));
      } catch (err) {
        setError(err);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error)
      return (
        <p style={{ color: "red", textAlign: "center" }}>
          Error: {error.message}
        </p>
      );

    return (
      <WrappedComponent
        data={data}
        fetchData={fetchData}
        addData={addData}
        updateData={updateData}
        deleteData={deleteData}
        {...props}
      />
    );
  };

  return WithHttpRequests;
};

export default withHttpRequests;
