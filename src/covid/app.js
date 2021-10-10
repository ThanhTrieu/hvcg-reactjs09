import React from 'react';
import LayoutVirus from './components/Layout';
import GlobalVirus from './components/Global-v2';
import CountriesVirus from './components/Countries-v2';
import VirusCoronaProvider from './context/virusProvider';

class AppVirus extends React.PureComponent {
    render () {
        return (
            <LayoutVirus
                lv1="Home"
                lv2="App"
                lv3="Virus"
            >
                <VirusCoronaProvider>
                    <GlobalVirus/>
                    <CountriesVirus/>
                </VirusCoronaProvider>
            </LayoutVirus>
        )
    }
}
export default AppVirus;