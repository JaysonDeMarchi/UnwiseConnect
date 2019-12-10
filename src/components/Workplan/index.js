import React, { Component } from 'react';
import { connect } from 'react-redux';

class Workplan extends Component {
  render() {
    return (
      <div className='workplan'>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Workplan);
