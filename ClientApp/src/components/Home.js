import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
            <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Chatbox</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Chat!</span>
                        </div>
                        <textarea class="form-control" aria-label="Enter some text"></textarea>
                    </div>
                    <btn className="btn btn-primary">submit</btn>
                    </div>
            </div>
      </div>
    );
  }
}
