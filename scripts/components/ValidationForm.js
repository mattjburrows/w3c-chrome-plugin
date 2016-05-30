import React, { PropTypes } from 'react';

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      incWarnings: 'yes'
    };
  }

  onUrlChange(event) {
    const url = event.target.value;
    this.setState({ url });
  }

  onWarningChange(event) {
    const incWarnings = event.target.value;
    this.setState({ incWarnings });
  }

  onFormSubmit (event) {
    event.preventDefault();

    const url = this.state.url;
    const incWarnings = this.state.incWarnings;

    this.props.onSubmit({ url, incWarnings });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <div className="row">
          <fieldset className="medium-6 columns">
            <legend>Add URL to validate</legend>
            <input type="text" name="validate-url" id="validate-url" placeholder={ this.props.url } onChange={ this.onUrlChange.bind(this) } />
          </fieldset>
          <fieldset className="medium-6 columns">
            <legend>Include warnings?</legend>
            <input type="radio" name="include-warnings" value="yes" id="yes-warnings" onChange={ this.onWarningChange.bind(this) } checked={ this.state.incWarnings === 'yes' } />
            <label htmlFor="yes-warnings">Yes</label>
            <input type="radio" name="include-warnings" value="no" id="no-warnings" onChange={ this.onWarningChange.bind(this) } checked={ this.state.incWarnings === 'no' } />
            <label htmlFor="no-warnings">No</label>
          </fieldset>
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <button className="button" type="submit">Validate URL</button>
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
