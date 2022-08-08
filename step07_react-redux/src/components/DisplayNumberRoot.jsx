import React, { Component } from 'react';
import DisplayNumberWrapper from '../containers/DisplayNumberWrapper';

export default class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                {/* Redux 사용 전 */}
                <DisplayNumberWrapper unit="kg"></DisplayNumberWrapper>
            </div>
        );
    }
}
