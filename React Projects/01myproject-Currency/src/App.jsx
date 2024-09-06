import { useState } from 'react'
import { Input } from './components';
import './App.css'
import useCurrency from './hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const getCurrencies = useCurrency(from);

  const convert = () => {
    setConvertedAmt(amount * getCurrencies[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount)
    setAmount(convertedAmt);
  }

  const options = Object.keys(getCurrencies)

  return (

    <div className="main">
      <div>
        <form className='second-main' onSubmit={(e) => {
          e.preventDefault()
          convert()
        }
        }>
          <Input
            label="From"
            amount={amount}
            selectCurrency={from}
            onAmountChange={(number) => setAmount(number)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
          />
          <button type='button' className='swap-btn' onClick={swap}>Swap</button>
          <Input
            label="To"
            amount={convertedAmt}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={options}
          />
          <button type='submit' className='convert-btn'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>

  )
}

export default App
