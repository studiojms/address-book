import React from 'react';
import PropTypes from 'prop-types';
import './ContactDetails.css';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    addressLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  hasFailedToFetch: PropTypes.bool,
};

const FetchFailure = () => (
  <div className="contact-details__fetch-failure">
    Failed to fetch Contact Details!
  </div>
);

const DataPlaceholder = () => (
  <div className="contact-details__placeholder">
    Contact Details will appear here…
  </div>
);

const Data = ({ data }) => (
  <div className="contact-details__data">
    <div className="contact-details__item contact-details__item--name">
      <span className="contact-details__item-title">Name</span>
      <span className="contact-details__item-data">{data.name}</span>
    </div>
    <div className="contact-details__item contact-details__item--phone">
      <span className="contact-details__item-title">Phone</span>
      <span className="contact-details__item-data">{data.phone}</span>
    </div>
    {/* TODO: Something is wrong here */}
    <div className="contact-details__item contact-details__item--address">
      <span className="contact-details__item-title">Address</span>
      <span className="contact-details__item-data">{data.addressLines[0]}</span>
    </div>
  </div>
);

const ContactDetails = ({ data, hasFailedToFetch = false }) => (
  <div className="contact-details">
    {hasFailedToFetch && <FetchFailure />}
    {!hasFailedToFetch && data ? <Data data={data} /> : <DataPlaceholder />}
  </div>
);

ContactDetails.propTypes = propTypes;

export default ContactDetails;
