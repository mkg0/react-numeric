import React from "react";
import PropTypes from "prop-types";
import AutoNumeric from "autonumeric";

export default class ReactNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.callEventHandler = this.callEventHandler.bind(this);
  }
  componentDidMount() {
    this.autonumeric = new AutoNumeric(this.input, this.props.value, {
      ...this.props.preDefined,
      ...this.props,
      onChange: undefined,
      onFocus: undefined,
      onBlur: undefined,
      onKeyPress: undefined,
      onKeyUp: undefined,
      onKeyDown: undefined,
      watchExternalChanges: false,
    });
  }

  componentWillReceiveProps(newProps) {
    const isOptionsChanged = JSON.stringify({...this.props, value: undefined}) !== JSON.stringify({...newProps, value: undefined});
    const isValueChanged = this.props.value !== newProps.value && this.getValue() !== newProps.value;
    if (isValueChanged){
      this.autonumeric.set(newProps.value);
    }
    if (isOptionsChanged) {
      this.autonumeric.update({
        ...newProps.preDefined,
        ...newProps,
        onChange: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onKeyPress: undefined,
        onKeyUp: undefined,
        onKeyDown: undefined,
        watchExternalChanges: false,
      });
    }
  }
  getValue() {
    if (!this.autonumeric) return;
    const valueMapper = {
      string: numeric => numeric.getNumericString(),
      number: numeric => numeric.getNumber(),
    };
    return valueMapper[this.props.outputFormat](this.autonumeric);
  }
  callEventHandler(event, eventName) {
    if (!this.props[eventName]) return;
    this.props[eventName](event, this.getValue());
  }
  render() {
    const inputProps = {};
    [
      'id',
      'className',
      'style',
      'disabled',
      'type',
      'name',
      'tabIndex',
      'unselectable',
      'size'
    ].forEach(prop => inputProps[prop] = this.props[prop])
    return (
      <input
        ref={ref => (this.input = ref)}
        onChange={e => this.callEventHandler(e, "onChange")}
        onFocus={e => this.callEventHandler(e, "onFocus")}
        onBlur={e => this.callEventHandler(e, "onBlur")}
        onKeyPress={e => this.callEventHandler(e, "onKeyPress")}
        onKeyUp={e => this.callEventHandler(e, "onKeyUp")}
        onKeyDown={e => this.callEventHandler(e, "onKeyDown")}
        {...inputProps}
      />
    );
  }
}

ReactNumeric.propTypes = {
  type: PropTypes.oneOf(["text", "tel", "hidden"]),
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  unselectable: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  allowDecimalPadding: PropTypes.bool,
  caretPositionOnFocus: PropTypes.number,
  createLocalList: PropTypes.bool,
  currencySymbol: PropTypes.string,
  currencySymbolPlacement: PropTypes.string,
  decimalCharacter: PropTypes.string,
  decimalCharacterAlternative: PropTypes.string,
  decimalPlaces: PropTypes.number,
  decimalPlacesRawValue: PropTypes.number,
  decimalPlacesShownOnBlur: PropTypes.number,
  decimalPlacesShownOnFocus: PropTypes.number,
  defaultValueOverride: PropTypes.string,
  digitalGroupSpacing: PropTypes.string,
  digitGroupSeparator: PropTypes.string,
  divisorWhenUnfocused: PropTypes.number,
  emptyInputBehavior: PropTypes.oneOf(["null", "focus", "press", "always", "zero"]),
  eventBubbles: PropTypes.bool,
  eventIsCancelable: PropTypes.bool,
  failOnUnknownOption: PropTypes.bool,
  formatOnPageLoad: PropTypes.bool,
  historySize: PropTypes.number,
  isCancellable: PropTypes.bool,
  leadingZero: PropTypes.oneOf(["allow", "deny", "keep"]),
  maximumValue: PropTypes.string,
  minimumValue: PropTypes.string,
  modifyValueOnWheel: PropTypes.bool,
  negativeBracketsTypeOnBlur: PropTypes.string,
  negativePositiveSignPlacement: PropTypes.oneOf(["l", "r", "p", "s"]),
  negativeSignCharacter: PropTypes.string,
  noEventListeners: PropTypes.bool,
  onInvalidPaste: PropTypes.oneOf(["error", "ignore", "clamp", "truncate", "replace"]),
  outputFormat: PropTypes.oneOf(["string", "number"]),
  overrideMinMaxLimits: PropTypes.oneOf(["ceiling", "floor", "ignore"]),
  positiveSignCharacter: PropTypes.string,
  rawValueDivisor: PropTypes.number,
  readOnly: PropTypes.bool,
  roundingMethod: PropTypes.string,
  saveValueToSessionStorage: PropTypes.bool,
  selectNumberOnly: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  serializeSpaces: PropTypes.string,
  showOnlyNumbersOnFocus: PropTypes.bool,
  showPositiveSign: PropTypes.bool,
  showWarnings: PropTypes.bool,
  styleRules: PropTypes.object,
  suffixText: PropTypes.string,
  symbolWhenUnfocused: PropTypes.string,
  unformatOnHover: PropTypes.bool,
  unformatOnSubmit: PropTypes.bool,
  valuesToStrings: PropTypes.object,
  wheelOn: PropTypes.oneOf(["focus", "hover"]),
  wheelStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  preDefined: PropTypes.object,
};

ReactNumeric.defaultProps = {
  type: "text",
  outputFormat: "number",
  preDefined: {},
  className: 'asdf',
};

export const predefinedOptions = AutoNumeric.getPredefinedOptions();
