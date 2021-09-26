import Header from './Header';
import Footer from './Footer';
import SideBar from './Sidebar';

export default function Layout(props) {
    return (
        <>
            <Header/>
            <SideBar/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}