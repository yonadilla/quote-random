import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import twitter from "./assets/twitter.svg"

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        const data = response.data;
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        const text = randomQuote.text;
        const author = randomQuote.author;
        setQuote({ text, author });
        console.log(randomQuote.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="quote-box">
      <div>

      <h1 className="text">{quote.text}</h1>
      <p className="author"> - {quote.author}</p>
      </div>
      <div className="bawah">
        <div className="twitter">
          <a
            className="tweet-quote"
            href={`https://twitter.com/intent/tweet?te  xt=${quote.text} - ${quote.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
          <div className="new-quote">
            <button  onClick={fetchQuote}>
              next
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
