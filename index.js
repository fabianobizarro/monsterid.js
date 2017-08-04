import React from 'react';
import dom from 'react-dom';

import Monster from './src/Monster';

class App extends React.Component {

    constructor(p) {
        super(p);

        this.state = {
            name: '',
            size: 128
        }

    }
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <h2>React MonsterId</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        Implementation of Monsterid.js on a React component
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-6">
                        
                        <p>
                            <label>Your name</label>: 
                            <input type="text" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
                        </p>

                        <p>
                            Size:
                            <input type="range" min="56" max="512"
                                value={this.state.size}
                                onChange={e => this.setState({ size: e.target.value })} />
                        </p>
                        <p>
                            <Monster value={this.state.name} width={this.state.size} heigth={this.state.size} />
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

dom.render(<App />, document.getElementById('root'));