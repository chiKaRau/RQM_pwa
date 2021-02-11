import React, { useState, useEffect } from "react";

import "./styles.css";

import { fetchQuotes } from "./api/fetchQuotes";
import { shuffleMainColor } from "./utils/shuffleMainColor";

import QuotePanel from "./components/QuotePanel";
import { Spinner } from "react-bootstrap";

import $ from "jquery";

const windowStyle = {
  width: window.innerWidth,
  height: window.innerHeight
};

const defaultQuoteObj = {
  quoteObj: "",
  tweetURL: ""
};

//NOTE: THE PWA won't work on codesandbox,
//      must download the app on your local machine
//      OR create a build folder and launch on deploy site

//You can open the lighhouse tab to check the performances and grades

export default function App() {
  const [quoteObj, setQuoteObj] = useState(defaultQuoteObj);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mainColor, setMainColor] = useState("black");

  const _getNewQuote = async () => {
    try {
      setIsSuccess(false);
      const data = await fetchQuotes();

      let colorTemp = shuffleMainColor()[0];
      $("body").css("background-color", colorTemp);
      setMainColor(colorTemp);

      setQuoteObj(data);
      setIsSuccess(true);
    } catch (e) {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    _getNewQuote();
  }, []);

  return (
    <div className="container" style={windowStyle}>
      {isSuccess ? (
        <QuotePanel
          quoteObj={quoteObj}
          _getNewQuote={_getNewQuote}
          mainColor={mainColor}
        />
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
