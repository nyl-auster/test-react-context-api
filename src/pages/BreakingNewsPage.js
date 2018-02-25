import React from "react";
import appContext from "../context/appContext";
console.log(appContext);

export default () => {
  return (
    <appContext.Consumer>
      {context => {
        return (
          <div>
            {context.language === "fr" && (
              <p className="breaking-news-page">CASSANTE NOUVELLE !</p>
            )}
            {context.language === "en" && (
              <p className="breaking-news-page">BREAKING NEWS !</p>
            )}
          </div>
        );
      }}
    </appContext.Consumer>
  );
};
