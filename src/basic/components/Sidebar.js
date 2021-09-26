import React from 'react';

class SideBarComponent extends React.Component {

    render() {
        return (
            <h1> sidebar  - {this.props.address} </h1>
        )
    }
}
export default SideBarComponent;