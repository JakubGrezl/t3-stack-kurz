import type { NextPage } from "next";
import { useEffect, useState } from "react";

const TestStranky: NextPage = () => {
  const [cislo, setCislo] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCislo(cislo + 1);
        }}
      >
        přičíst
      </button>{" "}
      <br />
      <button
        onClick={() => {
          setCislo(cislo - 1);
        }}
      >
        odečíst
      </button>{" "}
      <br />
      <p>číslo: {cislo}</p>
    </div>
  );
};

export default TestStranky;
