import React from "react";

export default class LanguageSwitcher extends React.Component {
  onClick = value => {
    this.props.onLanguageChange(value);
  };
  render() {
    return (
      <div className="language-switcher">
        <span onClick={() => this.onClick("fr")}>Français</span> |{" "}
        <span onClick={() => this.onClick("en")}>english</span>
      </div>
    );
  }
}
