A react component for editing/formating
> react-numeric is a wrapper component of [autonumeric](https://github.com/autoNumeric/autoNumeric).

## Installition

```sh
yarn add react-numeric
# or
npm install react-numeric --save
```

## Usage

```jsx
import ReactNumeric from 'ract-numeric';

export function USDMoneyInput(props){
  const { value } = props; // number typed
  return (
    <ReactNumeric
      value={value}
      currencySymbol="$"
      minimumValue="0"
      decimalCharacter="."
      digitGroupSeparator=""
      onChange={(event, value)=>{
        console.log(event.target.value); // '1,234.5 $'
        console.log(value); // 1234.5
      }}
    />
  );
}

// You can use predefinedOptions
import { predefinedOptions } from 'react-numeric';

export function USDMoneyInput(props){
  const { value } = props; // number typed
  return (
    <ReactNumeric
      value={value}
      preDefined={predefinedOptions.dollarPos}
      onChange={(e, value)=> this.setState({ value })}
    />
  );
}

// if you want to store value as string typed
export function USDMoneyInput(props){
  const { value } = props; // string typed
  return (
    <ReactNumeric
      value={value}
      outputFormat="string"
      onChange={(e, value)=> this.setState({ value })}
    />
  );
}
```
