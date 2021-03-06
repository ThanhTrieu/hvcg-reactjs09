import React from 'react';
import LayoutVirus from './components/Layout';
import GlobalVirus from './components/Global';
import CountriesVirus from './components/Countries';
import { apiVirus } from './services/api';
import { helper } from './helpers/common';
import { Skeleton } from 'antd';

class AppVirus extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            globalVirus: {},
            countriesVirus: []
        }
    }

    async componentDidMount() {
        // tien hanh call api o day va cap nhat lai state o day
        this.setState({loading: true});

        const virus = await apiVirus.getDataVirusCorona();
        if(!helper.isEmptyObject(virus)){
            // api co data tra ve
            // cap nhat lai state globalVirus
            if(virus.hasOwnProperty('Global')){
                this.setState({
                    ...this.state,
                    ...{ globalVirus: virus['Global'] }
                })
            }
            // cap nhat lai state cho countriesVirus
            if(virus.hasOwnProperty('Countries')){
                this.setState({
                    ...this.state,
                    ...{ countriesVirus: virus['Countries'] }
                })
            }
        }
        this.setState({loading: false});
    }

    render () {

        if(this.state.loading){
            return (
                <LayoutVirus
                    lv1="Home"
                    lv2="App"
                    lv3="Virus"
                >
                    <Skeleton active />
                </LayoutVirus>
            )
        }

        return (
            <LayoutVirus
                lv1="Home"
                lv2="App"
                lv3="Virus"
            >
                <GlobalVirus global={this.state.globalVirus} />
                <CountriesVirus countries={this.state.countriesVirus} />
            </LayoutVirus>
        )
    }
}
export default AppVirus;