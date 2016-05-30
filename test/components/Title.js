import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Title from '../../scripts/components/Title';

describe('Title component', () => {
  it('contains the passed in text', () => {
    const items = [{id: '1'}, {id: '2'}, {id: '3'}];
    const table = render(<Title title="We're off to see the Wizard" />);

    expect(table.find('h1').text().trim()).to.equal('We\'re off to see the Wizard');
  });
});
