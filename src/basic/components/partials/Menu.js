import React from 'react';

/*
class MenuComponent extends React.PureComponent {
    render() {
        console.log('MenuComponent is render');
        return (
            <h2> this is a menu</h2>
        )
    }
}
export default MenuComponent;
*/

const MenuComponent = () => {
    console.log('MenuComponent is render');
    return (
        <h2> this is a menu</h2>
    )
}
export default React.memo(MenuComponent);