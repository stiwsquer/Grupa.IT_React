import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { LayoutRoot, Options, Quote } from './Layout.style';

export default function Layout() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const [previousQuote, setPreviousQuote] = useState('');

  const fetchQuotes = async () => {
    let res = await fetch(
      'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
    );
    res = await res.json();
    setQuotes(res);
  };

  const getRandomQuote = () => {
    if (randomQuote) setPreviousQuote(randomQuote);
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const getPreviousQuote = () => {
    if (previousQuote) {
      setRandomQuote(previousQuote);
      setPreviousQuote('');
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    getRandomQuote();
  }, [quotes]);

  return (
    <LayoutRoot>
      <Options>
        <ButtonGroup variant="outlined">
          <Button disabled={!previousQuote} onClick={getPreviousQuote}>
            Previous
          </Button>
          <Button onClick={getRandomQuote}>Generate</Button>
        </ButtonGroup>
      </Options>

      <Quote>
        <Typography variant="h4">{randomQuote?.quote}</Typography>
        <Typography
          sx={{ position: 'absolute', bottom: '-3rem', right: '3rem' }}
          variant="h5"
        >
          {randomQuote?.author}
        </Typography>
      </Quote>
    </LayoutRoot>
  );
}
