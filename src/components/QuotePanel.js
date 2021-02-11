import React from "react";
import { Card, Button } from "react-bootstrap";

export default function QuotePanel(props) {
  const { author, content } = props.quoteObj;

  let tags = props.quoteObj.tags.map((e, index) => {
    return (
      <Card.Text style={{ margin: 5 }} key={index}>
        #{e}
      </Card.Text>
    );
  });

  const _tweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=  ${content} ${author} #quotes`
    );
  };

  return (
    <Card
      id="quote-box"
      className="quotePanelBox"
      style={{ color: props.mainColor }}
    >
      <Card.Body>
        <Card.Title id="author">{author}</Card.Title>
        <Card.Text>
          <span id="text" className="quote">
            "
          </span>
          {content}
        </Card.Text>
        <div className="d-flex flex-row">{tags}</div>
        <p> </p>
        <Button id="tweet-quote" onClick={_tweet}>
          Tweet
        </Button>
        <Button
          id="new-quote"
          className="newQuoteButton"
          onClick={props._getNewQuote}
          variant="primary"
        >
          New Quote
        </Button>
      </Card.Body>
    </Card>
  );
}
