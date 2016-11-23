import React, { Component } from 'react';
import Icon from '../../Icon';

const viewBox = {
    x: 0,
    y: 0,
    width: 533.333,
    height: 533.333
};

class GooglePlus extends Component {
    render() {
        return (
            <Icon {...this.props} viewBox={viewBox}>
                <path d='M291.18,41.358c0,0-104.665,0-139.552,0c-62.562,0-121.443,47.399-121.443,102.303
                    c0,56.107,42.647,101.388,106.296,101.388c4.426,0,8.727-0.088,12.938-0.392c-4.13,7.909-7.084,16.817-7.084,26.064
                    c0,15.592,8.387,28.233,18.994,38.554c-8.014,0-15.751,0.232-24.194,0.232C59.645,309.508,0,358.863,0,410.041
                    c0,50.406,65.386,81.934,142.882,81.934c88.346,0,137.139-50.127,137.139-100.535c0-40.417-11.925-64.621-48.795-90.695
                    c-12.612-8.928-36.735-30.644-36.735-43.408c0-14.958,4.269-22.327,26.786-39.919c23.079-18.034,39.413-43.386,39.413-72.873
                    c0-35.107-15.635-69.322-44.985-80.611h44.247L291.18,41.358z M242.438,382.742c1.107,4.673,1.71,9.483,1.71,14.39
                    c0,40.729-26.246,72.559-101.549,72.559c-53.563,0-92.248-33.908-92.248-74.637c0-39.918,47.982-73.147,101.544-72.568
                    c12.5,0.132,24.15,2.144,34.724,5.567C215.694,348.275,236.554,359.699,242.438,382.742z M156.676,230.825
                    c-35.958-1.075-70.124-40.222-76.33-87.427c-6.207-47.222,17.901-83.355,53.848-82.287c35.942,1.081,70.124,38.966,76.332,86.176
                    C216.728,194.506,192.616,231.901,156.676,230.825z M433.333,141.358v-100H400v100H300v33.333h100v100h33.334v-100h100v-33.333
                    H433.333z'
                />

            </Icon>);
    }
}

export default GooglePlus;
