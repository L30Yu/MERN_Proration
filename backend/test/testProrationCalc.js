
const { calculate } = require('../controllers/ProrationController');

const mock1 = {
    "allocation_amount": 100,
    "investor_amounts": [
      {
        "name": "Investor A",
        "requested_amount": 150,
        "average_amount": 100
      },
      {
        "name": "Investor B",
        "requested_amount": 50,
        "average_amount": 25
      },
    ]
  }

  const mock2 = {
    "allocation_amount": 100,
    "investor_amounts": [
      {
        "name": "Investor A",
        "requested_amount": 100,
        "average_amount": 95
      },
      {
        "name": "Investor B",
        "requested_amount": 2,
        "average_amount": 1
      },
      {
        "name": "Investor C",
        "requested_amount": 1,
        "average_amount": 4
      }
    ]
  }

  const mock3 = {
    "allocation_amount": 100,
    "investor_amounts": [
      {
        "name": "Investor A",
        "requested_amount": 100,
        "average_amount": 95
      },
      {
        "name": "Investor B",
        "requested_amount": 1,
        "average_amount": 1
      },
      {
        "name": "Investor C",
        "requested_amount": 1,
        "average_amount": 4
      }
    ]
  }


console.log(calculate(mock1));
console.log(calculate(mock2));
console.log(calculate(mock3));
