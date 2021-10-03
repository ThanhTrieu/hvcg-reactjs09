import React from 'react';
import LayoutVirus from './components/Layout';
import GlobalVirus from './components/Global';
import CountriesVirus from './components/Countries';

class AppVirus extends React.PureComponent {
    render () {
        return (
            <LayoutVirus
                lv1="Home"
                lv2="App"
                lv3="Virus"
            >
                <GlobalVirus/>
                <CountriesVirus/>
            </LayoutVirus>
        )
    }
}
export default AppVirus;