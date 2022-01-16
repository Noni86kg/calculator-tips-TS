import React, { useState } from "react";
import "./Card.css";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
import { ITask } from "../models/models";

const Card = () => {
  const [calcTipResult, setCalcTipResult] = useState<ITask>({
    tip: 0,
    total: 0,
    finish: false,
    billHiddenMessage: false,
    peopleHiddenMessage: false,
  });
  const [bill, setBill] = useState<number | null>(null);
  const [numOfPeople, setNumOfPeople] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [inputPercentage, setInputPercentage] = useState<number | null>(null);

  return (
    <main className="card">
      <CardLeft
        calcTipResult={calcTipResult}
        setCalcTipResult={setCalcTipResult}
        bill={bill}
        setBill={setBill}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople}
        percentage={percentage}
        setPercentage={setPercentage}
        inputPercentage={inputPercentage}
        setInputPercentage={setInputPercentage}
      />
      <CardRight
        calcTipResult={calcTipResult}
        setCalcTipResult={setCalcTipResult}
        setBill={setBill}
        setNumOfPeople={setNumOfPeople}
        setPercentage={setPercentage}
        setInputPercentage={setInputPercentage}
      />
    </main>
  );
};

export default Card;
