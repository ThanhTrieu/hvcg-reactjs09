import React from 'react';

class Child extends React.Component {

    componentWillUnmount(){
        // se chay khi component bi xoa - khong con ton tai
        console.log('componentWillUnmount is running');
    }

    render() {
        return (
            <>
                <h1> Child component </h1>
            </>
        )
    }
}
export default Child;