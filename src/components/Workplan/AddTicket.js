import React, { Component } from 'react';

export default class AddTicket extends Component {
  constructor() {
    super();

    this.state = {
      ticket: {
        summary: '',
        phase: '',
        budgetHours: 0,
        initialDescription: '',
        tags: '',
        aliases: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(attribute, value) {
    this.setState({
      ticket: {
        ...this.state.ticket,
        [attribute]: value,
      },
    });
  }

  onSubmit(e) {
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
      >
        {this.props.ticketAttributes.map( (attribute) => (
          <div
            className="dispatch-fields form-group"
            key={attribute.id}
          >
            <label
              style={{ display: 'block' }}
              htmlFor={attribute.id}
            >
              {attribute.label}
            </label>
            {
              (attribute.type === 'textarea') ?
              (<textarea
                name={attribute.id}
                value={this.state.ticket[attribute.id]}
                onChange={e => this.onChange(attribute.id, e.target.value)}
                style={{
                  width: '400px',
                  height: '150px'
                }}
              />) :
              (<input
                name={attribute.id}
                type={attribute.type || 'text'}
                value={this.state.ticket[attribute.id]}
                onChange={e => this.onChange(attribute.id, e.target.value)}
              />)
            }
          </div>
        ))}
        <button className="btn btn-primary" type='submit'>
          Add Ticket
        </button>
      </form>
    );
  }
}
