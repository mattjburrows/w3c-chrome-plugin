import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Title from '../../scripts/components/Title';

describe('Title component', () => {
  it('contains the passed in text', () => {
    const title = render(<Title title="We're off to see the Wizard" />);

    expect(title.find('h1').text().trim()).to.equal('We\'re off to see the Wizard');
  });
});
