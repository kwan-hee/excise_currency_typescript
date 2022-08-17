import React, { useState } from 'react';
import css from './Main.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import currencyRatio from './Current';
import { Container } from 'react-bootstrap';
import { BsChevronExpand } from 'react-icons/bs';

function Main() {
  const [fromcurrency, setfromCurrency] = useState('USD');
  const [tocurrency, settoCurrency] = useState('USD');
  const [text, setText] = useState('');
  const [fromValue, setfromValue] = useState(0);
  const [toValue, setTovalue] = useState(0);
  const [tokorea, setTokorea] = useState('달러');
  const [fromkorea, setFromkorea] = useState('달러');

  function convert(from:any, to:any) {
    let cR:any = currencyRatio;
    let amount = fromValue;
    console.log('from: ', from);
    console.log('amount: ', amount);
    let convertedAmount:number = amount * cR[from][to];
    setTovalue(convertedAmount);
    console.log('환전 결과: ', convertedAmount);
    setTokorea(cR[to].unit);
    setFromkorea(cR[from].unit);
  }

  console.log(currencyRatio.USD.unit);

  const handlefromClick = (e:any) => {
    setfromCurrency(e.target.value);
    convert(e.target.value, tocurrency);
  };

  const handletoClick = (e:any) => {
    settoCurrency(e.target.value);
    convert(fromcurrency, e.target.value);
  };

  const onReset = (e:any) => {
    setText('');
  };

  return (
    <>
      <div className={css.wrap}>
        <Container>
          <div className={css.box1}>
            <span className={css.font}>
              <h2>{fromcurrency}</h2>
            </span>
            <DropdownButton className={css.size} id="from-button" title="국가를 고르세요">
              <Dropdown.Item
                as="button"
                id="aa"
                value="USD"
                onClick={handlefromClick}
                onChange={(event) => {
                  setfromCurrency('USD');
                  console.log('set: ', fromcurrency);
                }}
              >
                USD
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                id="aa"
                value="KRW"
                onClick={handlefromClick}
                onChange={(event) => {
                  
                  setfromCurrency((event.target as HTMLInputElement).value);
                }}
              >
                KRW
              </Dropdown.Item>
              <div>
                <Dropdown.Item
                  as="button"
                  id="aa"
                  value="JPY"
                  onClick={handlefromClick}
                  onChange={(event) => {
                    setfromCurrency((event.target as HTMLInputElement).value);
                  }}
                >
                  JPY
                </Dropdown.Item>
              </div>
            </DropdownButton>{' '}
            <div className={css.box2}></div>
            <input
              type="number"
              className={css.inCome}
              id="from"
              placeholder="환전할 액수를 넣으세요"
              // onKeyUp={convert}
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
               convert;
              }}
              onChange={(event:any) => {
                setfromValue(event.target.value);
              }}
            />
            <div className={css.inCome_change} id="fromkorea">
              {fromkorea}
            </div>
          </div>
          <div className={css.equal}>
            <h1>
              <BsChevronExpand />
            </h1>
          </div>
          <div className={css.box1}>
            <span className={css.font}>
              <h2>{tocurrency}</h2>
            </span>
            <DropdownButton id="to-button" className={css.size} title="국가를 고르세요">
              {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
              <Dropdown.Item
                as="button"
                value="USD"
                onClick={handletoClick}
                onChange={(event) => {
                  settoCurrency((event.target as HTMLInputElement).value);
                }}
              >
                USD
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="KRW"
                onClick={handletoClick}
                onChange={(event) => {
                  settoCurrency((event.target as HTMLInputElement).value);
                }}
              >
                KRW
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="JPY"
                onClick={handletoClick}
                onChange={(event) => {
                  settoCurrency((event.target as HTMLInputElement).value);
                }}
              >
                JPY
              </Dropdown.Item>
            </DropdownButton>
            <div className={css.box2}></div>
            <input type="number" className={css.inCome} value={toValue} placeholder="환전할 액수를 넣으세요" id="to" 
           onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
           convert;
          }} />
            <div className={css.inCome_change} id="tokorea">
              {tokorea}
            </div>
          </div>
          <div>
            <button onClick={onReset}>초기화 </button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Main;