import Title from '../components/Title';
import ValidationForm from '../components/ValidationForm';
import Table from '../components/Table';

import fetchw3cData from '../utils/w3c';
import getSelectedTab from '../utils/chrome';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      title: 'W3C Validation',
      messages: [],
      incWarnings: true
    };

    getSelectedTab()
      .then((url) => this.setState({ url }));
  }

  fetchValidationData(formData) {
    const url = formData.url;
    const incWarnings = (formData.incWarnings === 'yes');

    this.setState({ url, incWarnings });
    fetchw3cData(url).then((json) => {
      const title = `Validation results: ${url}`;
      const messages = json.messages;

      this.setState({ title, messages });
    });
  }

  renderFormView() {
    return (
      <ValidationForm url={ this.state.url } onSubmit={ this.fetchValidationData.bind(this) } />
    );
  }

  renderResultsListView() {
    return (
      <Table items={ this.state.messages } incWarnings={ this.state.incWarnings } />
    );
  }

  render() {
    return (
      <div>
        <Title title={ this.state.title } />
        { (this.state.messages.length < 1) ? this.renderFormView() : this.renderResultsListView() }
      </div>
    )
  }
};

export default Home;
