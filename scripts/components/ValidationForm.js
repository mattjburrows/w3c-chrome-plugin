import React, { PropTypes } from 'react';

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit (event) {
    const url = this.refs.validateUrl.value || this.props.currentTab;
    const incWarnings = this.refs.incWarnings.value || 'yes';

    this.props.onSubmit({ url, incWarnings });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div className="row">
          <div className="medium-6 columns">
            <label htmlFor="validate-url">Add URL to validate
              <input type="text" name="validate-url" id="validate-url" placeholder={this.props.currentTab} ref="validateUrl" />
            </label>
          </div>
          <fieldset className="medium-6 columns">
            <legend>Include warnings?</legend>
            <input type="radio" name="include-warnings" value="Yes" id="yes-warnings" ref="incWarnings" checked />
            <label htmlFor="yes-warnings">Yes</label>
            <input type="radio" name="include-warnings" value="No" id="no-warnings" ref="incWarnings" />
            <label htmlFor="no-warnings">No</label>
          </fieldset>
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <input className="button" type="submit" value="Validate URL" />
          </div>
        </div>
      </form>
    );
  };
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentTab: PropTypes.string
};

export default ValidationForm;
