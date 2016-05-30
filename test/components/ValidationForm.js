import React from 'react';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

import ValidationForm from '../../scripts/components/ValidationForm';

const sandbox = sinon.sandbox.create();

describe('ValidationForm component', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('adds the passed in "url" as a placeholder value on the input#validate-url', () => {
    const form = render(<ValidationForm url="foo" onSubmit={() => {}} />);

    expect(form.find('input#validate-url').attr('placeholder')).to.equal('foo');
  });

  describe('onSubmit property', () => {
    it('calls when the form is submitted', () => {
      const onSubmitStub = sandbox.stub();
      const form = mount(<ValidationForm onSubmit={onSubmitStub} />);

      form.find('form').simulate('submit');
      expect(onSubmitStub.calledOnce).to.equal(true);
    });

    it('calls with the correct "incWarnings" value based on what radio button was selected', () => {
      const onSubmitStub = sandbox.stub();
      const form = mount(<ValidationForm onSubmit={onSubmitStub} />);

      form.find('#no-warnings').simulate('change');
      form.find('form').simulate('submit');

      expect(onSubmitStub.calledWith(sinon.match({
        incWarnings: 'no'
      }))).to.equal(true);
    });
  });
});
