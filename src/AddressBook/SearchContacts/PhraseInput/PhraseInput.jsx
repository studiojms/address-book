import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './PhraseInput.css';

const propTypes = {
  phrase: PropTypes.string.isRequired,
  onPhraseChange: PropTypes.func.isRequired,
  downshiftGetInputProps: PropTypes.func.isRequired,
};

const PhraseInput = ({ phrase, onPhraseChange, downshiftGetInputProps }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onChange = (event) => onPhraseChange(event.target.value);

  return (
    <input
      {...downshiftGetInputProps({
        className: 'phrase-input',
        placeholder: "To show contact's details, type its name…",
        value: phrase,
        onChange,
        ref,
      })}
    />
  );
};

PhraseInput.propTypes = propTypes;

export default PhraseInput;
