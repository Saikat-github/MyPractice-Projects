
import './Input.css';
import React, { useId } from 'react'

const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency,
  currencyOptions = [],
}) => {


  const amountInputId = useId()


  return (
    <div className='inputBox'>
      <div className="div1">
        <label htmlFor={amountInputId}>{label}</label>
        <br /><br />
        <input
          value={amount}
          type="number"
          placeholder='Amount'
          id={amountInputId}
          className='gray'
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

        />
      </div>
      <div className="div2">
        <p style={{ marginTop: "0rem" }}>Currency Type</p>
        <select
          className='gray'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          {
            currencyOptions.map((currency, idx) => {
              return (
                <option value={currency} key={idx}>{currency}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Input