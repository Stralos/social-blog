import React from "react";

export class DividerComponent extends React.Component {
  render() {
    return <div style={{ height: "1px", border: "1px solid black" }} />;
  }
}

export const Divider = {
  id: "divider",
  // Visible label
  label: "Divider",
  // Fields the user need to fill out when adding an instance of the component
  fields: [],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<Divider (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: (match) => {
    return undefined;
  },
  // Function to create a text block from an instance of this component
  toBlock: () => {
    return "<Divider />";
  },
  toPreview: () => {
    return <DividerComponent />
  },
};
