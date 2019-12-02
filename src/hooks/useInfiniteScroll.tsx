import { useState, useEffect } from "react";

const useInfiniteScroll = (fetchCallback: any) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    () => {
      if (!isFetching) return;
      fetchCallback();
    },
    // eslint-disable-next-line
    [isFetching]
  );

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    // eslint-disable-next-line
    []
  );

  function handleScroll() {
    const offsetHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (isFetching || innerHeight + scrollTop !== offsetHeight) return;

    setIsFetching(true);
  }

  return {
    isFetching: isFetching,
    setIsFetching: (value: boolean) => {
      setIsFetching(value);
    }
  };
};

export default useInfiniteScroll;
