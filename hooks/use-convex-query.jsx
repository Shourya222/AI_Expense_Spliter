import { useQuery, useMutation } from "convex/react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// This code is creating two custom React hooks – useConvexQuery and useConvexMutation – 
// to wrap Convex’s built-in hooks (useQuery and useMutation) with extra features like loading states, 
// error handling, toast notifications, and data management.

export const useConvexQuery = (query,args) => { //useConvexQuery(query, args) - wrapper around Convex’s useQuery.
  const result = useQuery(query, args); // useQuery(query, args) → runs a Convex query function and returns data
  const [data, setData] = useState(undefined); // data: stores the query result.
  const [isLoading, setIsLoading] = useState(true); //isLoading: true while the query is fetching.
  const [error, setError] = useState(null); //error: any error that happens.

  // Use effect to handle the state changes based on the query result
  useEffect(() => {  //useEffect to update data, isLoading, and error whenever the query result changes.
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);

  return {
    data,
    isLoading,
    error,
  };
};

export const useConvexMutation = (mutation) => { //useConvexMutation(mutation) - This wraps Convex’s useMutation.
  const mutationFn = useMutation(mutation); //useMutation(mutation) → gives you a function to call the mutation.
  const [data, setData] = useState(undefined); //data: stores the response of the last mutation.
  const [isLoading, setIsLoading] = useState(false); //isLoading: tracks mutation progress.
  const [error, setError] = useState(null);

  const mutate = async (...args) => { //mutate(...args): runs the mutation with loading & error handling built-in.
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(...args);
      setData(response);
      return response;
    } catch (err) {
      setError(err);
      toast.error(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, isLoading, error };
};