import React from 'react';
import shortid from 'shortid';
import { mount } from 'enzyme';
import MatchingContacts from './MatchingContacts';

const anyMatchingContact = (overrides) => ({
  id: shortid.generate(),
  value: 'Any Contact Name',
  ...overrides,
});

const renderMatchingContacts = (propsOverrides) =>
  mount(
    <MatchingContacts
      data={[ anyMatchingContact() ]}
      highlightedIndex={null}
      downshiftGetMenuProps={(props) => props}
      downshiftGetItemProps={(props) => props}
      {...propsOverrides}
    />,
  );

const highlightClassName = 'matching-contacts__item--highlighted';

describe('<MatchingContacts>', () => {

  it('render nothing if there is no data', async () => {
    // given
    const tree = renderMatchingContacts({
      data: [],
    });

    // then
    expect(tree).toBeEmptyRender();
  });

  it('render Matching Contacts', async () => {
    // given
    const tree = renderMatchingContacts({
      data: [
        anyMatchingContact({ value: 'Kate' }),
        anyMatchingContact({ value: 'John' }),
      ],
    });

    // then
    expect(tree.find('li')).toHaveLength(2);
    expect(tree.find('li').at(0)).toHaveText('Kate');
    expect(tree.find('li').at(1)).toHaveText('John');
  });

  it('distinguish highlighted Matching Contact', async () => {
    // given
    const tree = renderMatchingContacts({
      data: [
        anyMatchingContact(),
        anyMatchingContact(),
        anyMatchingContact(),
      ],
      highlightedIndex: 1,
    });

    // then
    expect(tree.find('li').at(0)).not.toHaveClassName(highlightClassName);
    expect(tree.find('li').at(1)).toHaveClassName(highlightClassName);
    expect(tree.find('li').at(2)).not.toHaveClassName(highlightClassName);
  });

  it('distinguish nothing, if no Matching Contact is highlighted', async () => {
    // given
    const tree = renderMatchingContacts({
      data: [
        anyMatchingContact(),
      ],
      highlightedIndex: null,
    });

    // then
    expect(tree.find('li').at(0)).not.toHaveClassName(highlightClassName);
  });

});
