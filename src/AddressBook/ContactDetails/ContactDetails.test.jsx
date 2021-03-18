import React from 'react';
import { mount } from 'enzyme';
import ContactDetails from './ContactDetails';

const anyContact = (overrides) => ({
  name: 'Any Contact Name',
  phone: '+987 654 321',
  addressLines: [
    'address – line 1',
    'address – line 2',
  ],
  ...overrides,
});

const render = ({ data = anyContact(), hasFailedToFetch = false } = {}) => {
  return mount(<ContactDetails data={data} hasFailedToFetch={hasFailedToFetch} />);
};

describe('<ContactDetails>', () => {

  it('render placeholder if there is no contact fetched', async () => {
    // given
    const tree = render({ data: null });

    // then
    expect(tree.find('.contact-details__placeholder')).toExist();
  });

  it('render error if fetching failed', async () => {
    // given
    const tree = render({ data: null, hasFailedToFetch: true });

    // then
    expect(tree.find('.contact-details__fetch-failure')).toExist();
  });

  it('render error if fetching failed and there is previously fetched Contact available', async () => {
    // given
    const tree = render({ hasFailedToFetch: true });

    // then
    expect(tree.find('.contact-details__fetch-failure')).toExist();
  });

  it('render name of fetched Contact Details', async () => {
    const data = anyContact();
    // given
    const tree = render({ data });

    // then
    expect(tree.find('.contact-details__item--name')).toExist();
    expect(tree.find('.contact-details__item--name .contact-details__item-title')).toHaveText('Name');
    expect(tree.find('.contact-details__item--name .contact-details__item-data')).toHaveText(data.name);
  });

  it('render all address lines of fetched Contact Details', async () => {
    const data = anyContact();
    // given
    const tree = render({ data });

    // then
    expect(tree.find('.contact-details__item--address')).toExist();
    expect(tree.find('.contact-details__item--address .contact-details__item-title')).toHaveText('Address');
    expect(
      tree.find('.contact-details__item--address .contact-details__item-data .contact-details__address-line')
    ).toHaveLength(2);
  });

});
