import './App.css';
import { useEffect, useState } from 'react';
import { fetchProration } from './utils/handleApi'
import {
  allocation_amount_input,
  inputs
} from './utils/inputUtils'
import FormInput from './components/FormInput';

const defaultInvestor = {
  "name": "Investor A",
  "requested_amount": 100,
  "average_amount": 100
}

function App() {

  const [result, setResult] = useState({})

  useEffect(() => {
  }, [])

  const [values, setValues] = useState(
    {
    "allocation_amount": 100,
    "investor_amounts": [
      { ...defaultInvestor },
      { ...defaultInvestor },
      { ...defaultInvestor },
    ]
  }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProration(setResult, values)
  };

  const onChange = (e, index) => {
    if (index != null) {
      const newInvestorAmounts = [...values["investor_amounts"]]
      newInvestorAmounts[index] = { ...newInvestorAmounts[index], [e.target.name]: e.target.value }
      setValues({ ...values, "investor_amounts": [...newInvestorAmounts] });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }

  };

  const handleAdd = () => {
    setValues({
      ...values, "investor_amounts": [...values["investor_amounts"],
      { ...defaultInvestor },]
    });
  }

  return (
    <div className="App">
      <div className="container">

        <form onSubmit={handleSubmit}>
          <h1>Proration App</h1>
          <FormInput
            {...allocation_amount_input}
            key={allocation_amount_input.id}
            value={values[allocation_amount_input.name]}
            onChange={(e) => onChange(e)}
          />
          {
            values.investor_amounts.map((investor, index) => {
              return (
                <div className='inputs-container' key={index}>
                  {
                    inputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={investor[input.name]}
                        onChange={(e) => onChange(e, index)}
                      />
                    ))

                  }
                </div>
              )
            })

          }
          <button>Submit</button>
        </form>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className='result-container'>
        <h1>Results</h1>
      <div className='result'>
        {Object.keys(result).map((name, index) => (
          <div key={index}>{name} : {result[name]}</div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
