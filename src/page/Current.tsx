const currencyRatio = {
    USD: {
      KRW: 1184.36,
      USD: 1,
      JPY: 132.21,
      unit: '달러',
    },
    KRW: {
      KRW: 1,
      USD: 0.00084,
      JPY: 0.1,
      unit: '원',
    },
    JPY: {
      KRW: 9.85,
      USD: 0.0076,
      JPY: 1,
      unit: '앤',
    },
  };
  console.log(currencyRatio.USD.unit);
  
  export default currencyRatio;