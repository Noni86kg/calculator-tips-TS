import React, { ChangeEvent, MouseEvent } from "react";
import "./CardLeft.css";
import { ITask } from "../models/models";

const buttons: number[] = [5, 10, 15, 25, 50];

interface Props {
  calcTipResult: ITask;
  setCalcTipResult: React.Dispatch<React.SetStateAction<ITask>>;
  bill: number | null;
  setBill: React.Dispatch<React.SetStateAction<number | null>>;
  numOfPeople: number | null;
  setNumOfPeople: React.Dispatch<React.SetStateAction<number | null>>;
  percentage: number | null;
  setPercentage: React.Dispatch<React.SetStateAction<number | null>>;
  inputPercentage: number | null;
  setInputPercentage: React.Dispatch<React.SetStateAction<number | null>>;
}

const CardLeft = ({
  calcTipResult,
  setCalcTipResult,
  bill,
  setBill,
  numOfPeople,
  setNumOfPeople,
  percentage,
  setPercentage,
  inputPercentage,
  setInputPercentage,
}: Props) => {
  const { billHiddenMessage, peopleHiddenMessage } = calcTipResult;

  const hiddenBothMess = () => {
    setCalcTipResult({
      ...calcTipResult,
      billHiddenMessage: true,
      peopleHiddenMessage: true,
    });
  };

  const hiddenBillMess = () => {
    setCalcTipResult({
      ...calcTipResult,
      billHiddenMessage: true,
      peopleHiddenMessage: false,
    });
  };

  const hiddenNumOfPeopleMess = () => {
    setCalcTipResult({
      ...calcTipResult,
      billHiddenMessage: false,
      peopleHiddenMessage: true,
    });
  };

  const tipCalc = (e: MouseEvent) => {
    const percent = Number(
      (e.target as HTMLButtonElement).getAttribute("value")
    );
    setPercentage(percent);
    if (bill && numOfPeople) {
      const tip =
        ((Number(bill) / Number(100)) * Number(percent)) / Number(numOfPeople);
      const total = Number(bill) / Number(numOfPeople) + tip;
      setCalcTipResult({
        tip: tip,
        total: total,
        finish: true,
        billHiddenMessage: false,
        peopleHiddenMessage: false,
      });
    } else if (!numOfPeople && !bill) {
      hiddenBothMess();
    } else if (!bill) {
      hiddenBillMess();
    } else if (!numOfPeople) {
      hiddenNumOfPeopleMess();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "bill") {
      setBill(Number(event.target.value));
    } else if (event.target.name === "numOfPeople") {
      setNumOfPeople(Number(event.target.value));
    } else if (event.target.name === "inputPercent") {
      if (bill && numOfPeople) {
        const percent = Number(event.target.value);
        setPercentage(percent);
        setInputPercentage(percent);
        const tip =
          ((Number(bill) / Number(100)) * Number(percent)) /
          Number(numOfPeople);
        const total = Number(bill) / Number(numOfPeople) + tip;
        setCalcTipResult({
          tip: tip,
          total: total,
          finish: true,
          billHiddenMessage: false,
          peopleHiddenMessage: false,
        });
      } else if (numOfPeople && bill) {
        hiddenBothMess();
      } else if (bill) {
        hiddenBillMess();
      } else if (numOfPeople) {
        hiddenNumOfPeopleMess();
      }
    }
  };

  return (
    <section className="card-left">
      <div className="flex-just-space-between">
        <h3>Bill</h3>
        {billHiddenMessage && <p className="hidden-message">Can't be zero</p>}
      </div>
      <div className="form">
        <input
          type="number"
          placeholder="0"
          onChange={handleChange}
          name="bill"
          value={bill ? bill : ""}
        />
        <div className="dollar icons" />
      </div>
      <h3>Select Tip %</h3>
      <div className="buttons">
        {buttons.map((button, key: number) => {
          return (
            <button
              key={key}
              value={button}
              className={
                percentage === button
                  ? "btn-green active-btn-green"
                  : "btn-green"
              }
              onClick={tipCalc}
            >
              {button}%
            </button>
          );
        })}
        <input
          className="input-tip"
          type="number"
          onChange={handleChange}
          placeholder="Custom"
          name="inputPercent"
          value={inputPercentage ? inputPercentage : ""}
        />
      </div>
      <div className="flex-just-space-between">
        <h3>Number of People</h3>
        {peopleHiddenMessage && <p className="hidden-message">Can't be zero</p>}
      </div>
      <div className="form">
        <input
          type="number"
          placeholder="0"
          onChange={handleChange}
          name="numOfPeople"
          value={numOfPeople ? numOfPeople : ""}
        />
        <div className="people icons" />
      </div>
    </section>
  );
};

export default CardLeft;
