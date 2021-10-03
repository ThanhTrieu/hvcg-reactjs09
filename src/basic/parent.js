import React from 'react';
import ChildComponent from './child';
import MenuComponent from './components/partials/Menu';

class Parent extends React.Component {
    // 1 -mouting
    constructor(props) {
        super(props);
        /// phuong thuc nay se chay dau tien khi ma khoi tao class CP
        /// chi chay duy nhat 1 lan trong mouting
        /// thong thuong noi nay dung lam noi de khai bao state
        this.state = {
            count: 0,
            show: true
        }
        this.changeCount = this.changeCount.bind(this);
        this.showHide = this.showHideComponent.bind(this);

        console.log('constructor is running');
        console.log('*************');
    }
    static getDerivedStateFromProps(props, state) {
        // props : props duoc truyen vao CP
        // state: chinh la state cua CP dang khai bao
        // muc dich: can thay doi cap nhat state theo props hay ko;
        console.log('getDerivedStateFromProps is running');
        console.log(props);
        console.log(state);
        console.log('*************');
        // phuong thuc nay khong phai chi chay duy nhat 1 lan trong mouting
        return null;
    }

    componentDidMount() {
        // phuong thuc chay cuoi cung trong mouting - chi chay duy nhat 1 lan
        // call data tu backend 
        console.log('componentDidMount is running');
        console.log('*************');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // ban chat ham nay - chi phoi viec co render lai giao dien ko?
        // ham nay tra ve true - render lai va nguoc lai
        // mac dinh khi ko khai bao ham nay - luon luon thuc thi render
        console.log('shouldComponentUpdate is running'); 
        console.log(nextProps);
        console.log(nextState);
        console.log('*************');
        return true; // ko cap nhat lai giao dien - khi state thay doi - khi co new props
    }

    changeCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    showHideComponent() {
        this.setState({
            show: !this.state.show
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is running'); 
        console.log(prevProps);
        console.log(prevState);
        // thong thuong xu ly logic gi do
        // tra ket qua cho componentDidUpdate sau nay xu ly
        console.log('*************');
        return 'blue';
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // snapshot : ket qua cua getSnapshotBeforeUpdate
        console.log('componentDidUpdate is running'); 
        console.log(prevProps);
        console.log(prevState);
        // khong con su dung this.setSate dc nua
        // thao tac truc tiep voi DOM HTML
        document.getElementById('title').style.color = snapshot;
    }

    render() {
        console.log('render is running');
        console.log('*************');
        return(
            <>
                <h1 id="title">Counter - {this.state.count}</h1>
                { this.state.show  ? (<ChildComponent />) : null  }
                <MenuComponent />
                <button onClick={this.changeCount}>+</button>
                <button onClick={this.showHide}>show/hide Child component</button>
            </>
        )
    }
}
export default Parent;