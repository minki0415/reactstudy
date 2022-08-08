import React, { Component } from 'react';
import AddNumberWrapper from '../containers/AddNumberWrapper';

export default class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                {/* Redux 사용 전 */}
                {/* <AddNumber onClick={function(size) {
                    this.props.onClick(size);
                }.bind(this)}></AddNumber> */}
                <AddNumberWrapper></AddNumberWrapper>
            </div>
        );
    }
}
