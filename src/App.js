import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import BreakingNewsPage from "./pages/BreakingNewsPage";
import appContext from "./context/appContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "fr"
    };
  }
  onLanguageChange = value => {
    this.setState({
      language: value
    });
  };
  render() {
    return (
      <appContext.Provider value={{ language: this.state.language }}>
        <Router>
          <div className="App">
            <div>
              <Header />
              <Navigation />
              <div>
                <LanguageSwitcher onLanguageChange={this.onLanguageChange} />
                <Route exact path="/" component={HomePage} />
                <Route
                  exact
                  path="/breaking-news"
                  component={BreakingNewsPage}
                />
              </div>
            </div>
          </div>
        </Router>
      </appContext.Provider>
    );
  }
}

export default App;
