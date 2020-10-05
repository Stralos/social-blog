import React from "react";

export class CategoriesControll extends React.Component {
  onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const props = this.props;
    return (
      <input
        value={props.value ? props.value : ""}
        id={props.forID}
        className={props.classNameWrapper}
        onChange={this.onChange}
        type="text"
      />
    );
  }
}

export const CategoriesPreview = (props) => {
  return <div> {props.value}</div>;
};
