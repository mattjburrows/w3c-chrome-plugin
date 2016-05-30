import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Table from '../../scripts/components/Table';

describe('Table component', () => {
  it('builds the correct number of TableRows', () => {
    const items = [{id: '1'}, {id: '2'}, {id: '3'}];
    const table = mount(<Table items={items} incWarnings={true} />);

    expect(table.find('tbody tr').length).to.equal(3);
  });

  it('shows only "errors" when "incWarnings" is false', () => {
    const items = [{type: 'info'}, {type: 'error'}, {type: 'info'}];
    const table = mount(<Table items={items} incWarnings={false} />);

    expect(table.find('tbody tr').length).to.equal(1);
  });
});
