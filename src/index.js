import React from "react";
import PropTypes from "prop-types";
import AutoNumeric from "autonumeric";

export default class ReactNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }
  componentDidMount() {
    this.autonumeric = new AutoNumeric(this.input, this.props.value, {
      ...this.props.preDefined,
      ...this.props,
      onChange: undefined,
      watchExternalChanges: false
    });
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.value !== newProps.value &&
      this.getValue() !== newProps.value
    )
      this.autonumeric.set(newProps.value);
  }
  getValue() {
    if (!this.autonumeric) return;
    const valueMapper = {
      string: numeric => numeric.getNumericString(),
      number: numeric => numeric.getNumber()
    };
    return valueMapper[this.props.outputFormat](this.autonumeric);
  }
  render() {
    return (
      <input
        ref={ref => (this.input = ref)}
        type={this.props.type}
        onChange={event => this.props.onChange(event, this.getValue())}
      />
    );
  }
}

ReactNumeric.propTypes = {
  type: PropTypes.oneOf(["text", "tel", "hidden"]),
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
  emptyInputBehavior: PropTypes.oneOf([
    "null",
    "focus",
    "press",
    "always",
    "zero"
  ]),
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
  onInvalidPaste: PropTypes.oneOf([
    "error",
    "ignore",
    "clamp",
    "truncate",
    "replace"
  ]),
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
  wheelOn: PropTypes.string,
  wheelStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  preDefined: PropTypes.object
};

ReactNumeric.defaultProps = {
  type: "text",
  outputFormat: "number",
  preDefined: {}
};

export const predefinedOptions = AutoNumeric.getPredefinedOptions();
