import React from 'react';
import Downshift from 'downshift';
import { mount } from 'enzyme';
import SearchContacts from './SearchContacts';


describe('<SearchContacts>', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      matchingContacts: [],
      onSelectContact: jest.fn(),
      searchPhrase: '',
      onChangeSearchPhrase: jest.fn(),
      hasFailedToSearch: false,
    };

    wrapper = mount(<SearchContacts {...props} />);
  });

  it('render <Downshift> external autocomplete component by default', async () => {
    expect(wrapper.find(Downshift)).toExist();
  });

  it('render <Downshift> external autocomplete component even if search failed', async () => {
    // given
    wrapper.setProps({
      hasFailedToSearch: true,
    });

    // then
    expect(wrapper.find(Downshift)).toExist();
  });

  it('render error if search failed', async () => {
    // given
    wrapper.setProps({
      hasFailedToSearch: true,
    });

    // then
    expect(wrapper.find('.search-contacts__search-failure')).toExist();
  });

});
