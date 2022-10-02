import { useCallback, useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  const intervalRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(savedCallback.current, delay);
      intervalRef.current = id;
      return () => clearInterval(id);
    }
  }, [delay]);

  useEffect(() => {
    // clear interval on when component gets removed to avoid memory leaks
    return () => clearInterval(intervalRef.current);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(savedCallback.current, delay);
    }
  }, [delay]);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return {
    reset,
    stop,
  };
}
