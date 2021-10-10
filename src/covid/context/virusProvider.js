import React from 'react';
import { apiVirus } from '../services/api';
import { helper } from '../helpers/common';
import VirusContext from './virusContext';

class VirusProvider extends React.PureComponent {
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

    render() {
        return (
            <VirusContext value={this.state}>
                {this.props.children}
            </VirusContext>
        )
    }
}

export default VirusProvider;