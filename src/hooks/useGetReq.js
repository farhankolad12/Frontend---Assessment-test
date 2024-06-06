import { useEffect, useState } from "react";

export function useGetReq(url, params) {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setBooks(undefined);
      setLoading(true);
      const headers = new Headers();

      headers.append("Content-Type", "application/json");

      await fetch(url, {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();
          setBooks(data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    })();
  }, [params.searchParams]);

  return { books, loading, error };
}
