import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return <div>{users.length}</div>;
};

export default AllUsers;
