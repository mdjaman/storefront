import React, { Component } from 'react';
import Icon from '../Icon';

const viewBox = {
    x: 0,
    y: 0,
    width: 32.296,
    height: 32.296
};

class Approved extends Component {
    render() {
        return (
            <Icon {...this.props} viewBox={viewBox}>
                <g fill={'green'}>
                    <path d='M31.923,9.14L13.417,27.642c-0.496,0.494-1.299,0.494-1.793,0L0.37,16.316
                    c-0.494-0.496-0.494-1.302,0-1.795l2.689-2.687c0.496-0.495,1.299-0.495,1.793,0l7.678,7.729L27.438,4.654
                    c0.494-0.494,1.297-0.494,1.795,0l2.689,2.691C32.421,7.84,32.421,8.646,31.923,9.14z'
                    />
                </g>
            </Icon>);
    }
}
export default Approved;
