"use client";
import { useEffect } from "react";

export default function Error(error: Error) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-red-300">
      <h2 className="text-xl text-black">Team Error!!</h2>
      <p className="text-xl text-black">{error?.message}</p>
    </section>
  );
}
