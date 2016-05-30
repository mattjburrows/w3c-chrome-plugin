import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import TableRow from '../../scripts/components/TableRow';

function buildItemData(overrides) {
  return Object.assign({}, {
    type: 'info',
    lastLine: '51',
    subType: 'warning',
    message: 'The “banner” role is unnecessary for element “header”.',
    extract: 'e)]><!--> <header role="banner""> <!--<'
  }, overrides);
}

describe('TableRow component', () => {
  it('builds the item from the item data', () => {
    const itemData = buildItemData();
    const tableRow = render(<TableRow item={itemData} />);
    const rowCells = tableRow.find('tr').children();

    expect(rowCells.eq(1).text().trim()).to.equal(itemData.message);
    expect(rowCells.eq(2).text().trim()).to.equal(itemData.extract);
    expect(rowCells.eq(3).text().trim()).to.equal(itemData.lastLine);
  });

  describe('Label', () => {
    it('contains a warning label when the item contain {"type": "info"}', () => {
      const itemData = buildItemData();
      const tableRow = render(<TableRow item={itemData} />);
      const rowCells = tableRow.find('tr').children();

      expect(rowCells.eq(0).find('span').attr('class')).to.equal('warning button');
    });

    it('contains an error label when the item contain {"type": "error"}', () => {
      const itemData = buildItemData({type: 'error'});
      const tableRow = render(<TableRow item={itemData} />);
      const rowCells = tableRow.find('tr').children();

      expect(rowCells.eq(0).find('span').attr('class')).to.equal('alert button');
    });
  });
});
