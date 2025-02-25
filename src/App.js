import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Title />
      <Calculator />
    </div>
  );
}

function Title() {
  return (
    <h1 className="title">
      spli
      <br />
      tter
    </h1>
  );
}

function Calculator() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState("");

  const tipAmount = parseFloat(
    ((bill * tipPercentage) / 100 / people).toFixed(2)
  );
  const total = parseFloat((bill / people + tipAmount).toFixed(2));

  function handleBill(e) {
    if (e.target.value < 0) return;
    setBill(e.target.value);
  }

  function handlePeople(e) {
    if (e.target.value < 1) return;
    setPeople(e.target.value);
  }

  function handleTipPercentage(e) {
    setTipPercentage(e.target.value);
  }

  function handleReset() {
    setBill("");
    setPeople(1);
    setTipPercentage("");
  }

  return (
    <div className="calculator">
      <Form
        bill={bill}
        onBill={handleBill}
        people={people}
        onPeople={handlePeople}
        onTipPercentage={handleTipPercentage}
        tipPercentage={tipPercentage}
      />
      <Output tipAmount={tipAmount} total={total} onReset={handleReset} />
    </div>
  );
}

function Form({
  bill,
  onBill,
  people,
  onPeople,
  tipPercentage,
  onTipPercentage,
}) {
  return (
    <div className="form">
      <Bill bill={bill} onBill={onBill} />
      <Tip tipPercentage={tipPercentage} onTipPercentage={onTipPercentage} />
      <PeopleNumber people={people} onPeople={onPeople} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div className="bill-input">
      <label>Bill$</label>
      <input type="number" placeholder="0" value={bill} onChange={onBill} />
    </div>
  );
}

function Tip({ tipPercentage, onTipPercentage }) {
  return (
    <div className="tip-selection">
      <label>Select Tip %</label>
      <form className="tip-form">
        <label>
          <input
            type="radio"
            name="tip"
            value="5"
            onChange={onTipPercentage}
            checked={tipPercentage === "5"}
          />
          <span className="custom-radio">5%</span>
        </label>

        <label>
          <input
            type="radio"
            name="tip"
            value="10"
            onChange={onTipPercentage}
          />
          <span className="custom-radio">10%</span>
        </label>

        <label>
          <input
            type="radio"
            name="tip"
            value="15"
            onChange={onTipPercentage}
            checked={tipPercentage === "15"}
          />
          <span className="custom-radio">15%</span>
        </label>

        <label>
          <input
            type="radio"
            name="tip"
            value="25"
            onChange={onTipPercentage}
            checked={tipPercentage === "25"}
          />
          <span className="custom-radio">25%</span>
        </label>

        <label>
          <input
            type="radio"
            name="tip"
            value="50"
            onChange={onTipPercentage}
          />
          <span className="custom-radio">50%</span>
        </label>

        <input
          type="number"
          placeholder="Custom"
          className="custom-tip"
          value={tipPercentage}
          onChange={onTipPercentage}
          checked={tipPercentage === "50"}
        />
      </form>
    </div>
  );
}

function PeopleNumber({ people, onPeople }) {
  return (
    <div className="people-input">
      <label>Number of People 👤</label>
      <input type="number" placeholder="0" value={people} onChange={onPeople} />
    </div>
  );
}

function Output({ tipAmount, total, onReset }) {
  return (
    <div className="output">
      <div className="description-container">
        <div className="description">
          <p className="amount">Tip Amount</p>
          <p className="person">/ person</p>
        </div>

        <p className="result">${tipAmount}</p>
      </div>

      <div className="description-container">
        <div className="description">
          <p className="total">Total</p>
          <p className="person">/ person</p>
        </div>
        <p className="result">${total}</p>
      </div>
      <ResetButton onReset={onReset} />
    </div>
  );
}

function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      RESET
    </button>
  );
}
