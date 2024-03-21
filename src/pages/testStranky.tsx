import type { NextPage } from "next";
import { useEffect, useState } from "react";

const TestStranky: NextPage = () => {
  const [cislo, setCislo] = useState(0);

  return (
    <div className="p-4">
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          setCislo(cislo + 1);
        }}
      >
        přičíst
      </button>{" "}
      <br />
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={() => {
          setCislo(cislo - 1);
        }}
      >
        odečíst
      </button>{" "}
      <br />
      <p className="mt-4">číslo: {cislo}</p>
    </div>
  );
};

export default TestStranky;
