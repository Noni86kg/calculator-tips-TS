import React from "react";
import "./CardRight.css";
import { ITask } from "../models/models";

interface Props {
  calcTipResult: ITask;
  setCalcTipResult: React.Dispatch<React.SetStateAction<ITask>>;
  setBill: React.Dispatch<React.SetStateAction<number | null>>;
  setNumOfPeople: React.Dispatch<React.SetStateAction<number | null>>;
  setPercentage: React.Dispatch<React.SetStateAction<number | null>>;
  setInputPercentage: React.Dispatch<React.SetStateAction<number | null>>;
}

const CardRight = ({
  calcTipResult,
  setCalcTipResult,
  setBill,
  setNumOfPeople,
  setPercentage,
  setInputPercentage,
}: Props) => {
  const { tip, total, finish } = calcTipResult;

  const restart = (): void => {
    if (finish) {
      setCalcTipResult({
        tip: 0,
        total: 0,
        finish: false,
        billHiddenMessage: false,
        peopleHiddenMessage: false,
      });
      setBill(null);
      setNumOfPeople(null);
      setPercentage(null);
      setInputPercentage(null);
    }
  };

  return (
    <section className="card-right">
      <div>
        <div className="flex-just-space-between">
          <div className="flex-column">
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h5>${tip.toFixed(2)}</h5>
        </div>
        <div className="flex-just-space-between">
          <div className="flex-column">
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h5>${total.toFixed(2)}</h5>
        </div>
      </div>
      <button
        className={
          finish ? "btn-darkGreen active-btn-darkGreen" : "btn-darkGreen"
        }
        onClick={restart}
      >
        RESET
      </button>
    </section>
  );
};

export default CardRight;
