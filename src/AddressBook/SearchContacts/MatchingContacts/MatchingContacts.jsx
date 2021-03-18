import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MatchingContacts.css';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  highlightedIndex: PropTypes.number,
  downshiftGetMenuProps: PropTypes.func.isRequired,
  downshiftGetItemProps: PropTypes.func.isRequired,
};

const MatchingContacts = ({
  data,
  highlightedIndex,
  downshiftGetMenuProps,
  downshiftGetItemProps,
}) => {
  // TODO: Something is missing here

  return (
    <ul {...downshiftGetMenuProps()} className='matching-contacts'>
      {data.map((item, index) => (
        <li
          {...downshiftGetItemProps({
            key: item.id,
            item: item,
            className: classNames(
              'matching-contacts__item',
              /* TODO: Something is wrong here */
              { 'matching-contacts__item--highlighted': false }
            ),
          })}
        >
          {item.value}
        </li>
      ))}
    </ul>
  );
};

MatchingContacts.propTypes = propTypes;

export default MatchingContacts;
