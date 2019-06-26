import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import NavBar from "../navbar/navbar"
import Grid from '@material-ui/core/Grid';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { weatherKey } from '../../consts/constants';
import setUnits from './actionCreator';

function mapStateToProps(state){
    return {units: state.settingsReducer.units}
}
function mapDispatchToProps(dispatch){
    return {addAction: payload => dispatch(payload)};
}
class Settings extends React.Component {

    constructor() {
        super();
        this.state = {
            units: "celsius"
        }
    }
    children = [
        <ToggleButton key={1} value="celsius">
            °C
        </ToggleButton>,
        <ToggleButton key={2} value="farenheit">
            °F
        </ToggleButton>
    ]
    handleChange = (event, newUnits) => {
        this.setState({ units: newUnits });
        this.props.addAction(setUnits(newUnits));
    }
    handleResetClick = () =>{
        localStorage.removeItem(weatherKey);
    }

    componentDidMount(){
        this.setState({units: this.props.units})
    }

    render() {
        return <Fragment>
            <NavBar></NavBar>
            <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                    <Typography align="center" variant="h5">Units</Typography>
                    <ToggleButtonGroup size="large" value={this.state.units} exclusive onChange={this.handleChange}>
                        {this.children}
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h5">System Settings</Typography>
                    <Button fullWidth variant="contained" color="secondary" onClick={this.handleResetClick}>
                        Reset Cahce
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);