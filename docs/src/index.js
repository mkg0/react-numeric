import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactNumeric, { predefinedOptions } from "../../src";
import Snippet from "./components/Snippet";
import ComponentSnippet from "./components/ComponentSnippet";

import Layout from "./components/Layout";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: 12345,
      example1: 12345,
      example2: "12345",
      example3: 12345,
    };
  }
  render() {
    return (
      <Layout>
        <h1>react-numeric</h1>
        <blockquote>A react component for formatted numeric values.</blockquote>
        <p>
          react-numeric is a wrapper component of{" "}
          <a href="https://github.com/autoNumeric/autoNumeric" target="_blank">
            autonumeric
          </a>.
        </p>

        <ComponentSnippet
          initialMode="preview"
          code={`
          import ReactNumeric from 'react-numeric';

          <ReactNumeric
            value={this.state.value} // number
            onChange={(event, value)=> {
              this.setState({ value });
            }} />
          `}
          preview={
            <ReactNumeric
              value={this.state.intro}
              onChange={(...params) => {
                console.info("onChange", params);
                this.setState({ intro: params[1] });
              }}
            />
          }
        />
        <h2>Installition</h2>
        <Snippet language="bash">
          {`
          yarn add react-numeric
          `}
        </Snippet>
        <p>If you don't use yarn</p>
        <Snippet language="bash">
          {`
          npm install react-numeric --save
          `}
        </Snippet>

        <h2>Usage & Demos</h2>

        <ComponentSnippet
          initialMode="code"
          code={`
            <ReactNumeric
              value={this.state.example1}
              minimumValue="0"
              currencySymbol=" €"
              decimalCharacter=","
              digitGroupSeparator="."
              onChange={(event, value)=> this.setState({example1: value}) }} />
          `}
          preview={
            <div>
              <ReactNumeric
                value={this.state.example1}
                minimumValue="0"
                currencySymbol=" €"
                decimalCharacter=","
                digitGroupSeparator="."
                onChange={(...params) => {
                  console.info("onChange", params);
                  this.setState({ example1: params[1] });
                }}
              />
            </div>
          }
        />
        <p>if you want to store value as string typed</p>
        <ComponentSnippet
          initialMode="code"
          code={`
            <ReactNumeric
              outputFormat="string"
              value={this.state.example2} // string value
              onChange={(event, value)=> this.setState({example2: value}) }} />
          `}
          preview={
            <ReactNumeric
              outputFormat="string"
              value={this.state.example2}
              onChange={(...params) => {
                console.info("onChange", params);
                this.setState({ example2: params[1] });
              }}
            />
          }
        />

        <p>You can use predefinedOptions</p>
        <ComponentSnippet
          initialMode="code"
          code={`
            <ReactNumeric
              preDefined={predefinedOptions.percentageEU2dec}
              value={this.state.example3}
              onChange={(event, value)=> this.setState({example3: value}) }} />
          `}
          preview={
            <ReactNumeric
              preDefined={predefinedOptions.percentageEU2dec}
              value={this.state.example3}
              onChange={(...params) => {
                console.info("onChange", params);
                this.setState({ example3: params[1] });
              }}
            />
          }
        />
      </Layout>
    );
  }
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<DemoPage />, root);
