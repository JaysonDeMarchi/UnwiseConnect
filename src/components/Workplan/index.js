import React, { Component } from 'react';
import AddTicket from './AddTicket';
import WorkplanList from './WorkplanList';
import { connect } from 'react-redux';

class Workplan extends Component {
  constructor() {
    super();

    this.state = {
      workplanTickets: [],
    };

    this.addTicket = this.addTicket.bind(this);
  }

  addTicket(ticket) {
    this.state.workplanTickets.push(ticket);
  }

  render() {
    return (
      <div className='panel-uc panel panel-default'>
        <div className="panel-uc__heading panel-heading clearfix">
          <h4>Workplan Builder</h4>
        </div>
        <div className="panel-body">
          <AddTicket
            ticketAttributes={this.props.ticketAttributes}
            onAdd={this.addTicket}
          />
        </div>
        <WorkplanList
          ticketAttributes={this.props.ticketAttributes}
          workplanTickets={this.props.workplanTickets}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  'ticketAttributes': [
    {
      'id': 'summary',
      'label': 'Summary',
    },
    {
      'id': 'phase',
      'label': 'Phase',
    },
    {
      'id': 'budgetHours',
      'label': 'Budget Hours',
    },
    {
      'id': 'initialDescription',
      'label': 'Initial Description',
      'type': 'textarea',
      'required': 'false',
    },
    {
      'id': 'tags',
      'label': 'Tags',
    },
    {
      'id': 'aliases',
      'label': 'Aliases',
      'required': 'false',
    },
  ],
});

export default connect(mapStateToProps)(Workplan);
