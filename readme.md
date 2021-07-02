# Validate Cards

### Goal:

```
Build API to validate payment information and charge amount
```

## Setup

- Clone this repository

- Start the development server

```bash
 npm run dev
```

- Start the server

```bash
 npm start
```

### Route
```
 POST: /card
```


### Api-key
```
api-key: 35aa60dd-2e5b-42c1-867f-88f56e4b48d3
```

### Body Sample
```
{
    "credit_card_number": 5399839209678035,
    "exp_date": "07/2021",
    "cvv": "123",
    "email": "mail@mail.com",
    "mobile": "09035420336",
    "phone_number": "09035420330",
    "amount": 1000
}
```

### Response Sample
```
{
    "valid": true,
    "errors": {},
    "data": {
        "cardType": "Mastercard",
        "credit_card_number": 5399839209678035,
        "exp_date": "07/2021",
        "cvv": "123",
        "email": "soji@mail.com",
        "mobile": "09035420336",
        "phone_number": "09035420330",
        "amount": 1000
    }
}
```

