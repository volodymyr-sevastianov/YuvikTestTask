import React from "react";
import OneDayWeatherContainer from "../oneDayWeatherContainer/oneDayWeatherContainer";
import { connect } from 'react-redux'
import NavBar from "../navbar/navbar"
import getWeather from "./actionCreators"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import "./allWeatherContainer.scss"


function mapStateToProps(state) {
    return { 
        weather: state.allWeatherReducer,
        units: state.settingsReducer.units
     }
}

function mapDispatchToProps(dispatch) {
    return {
        addAction: payload => dispatch(payload)
    }
}
class AllWeatherContainer extends React.Component {

    componentDidMount() {
        this.props.addAction(getWeather(this.props.units));
    }

    render() {
        return <div className="main">
            <NavBar></NavBar>
            <div className="grid">
                {(() => {
                    if (this.props.weather.weather) {
                        return <GridList className="gridList" cols={4} cellHeight="auto" spacing={12}>
                            {this.props.weather.weather.forecasts.map((item, index) => {
                                return <GridListTile className="gridListItem" key={index}>
                                    <OneDayWeatherContainer units={this.props.units} key={index} weather={item}></OneDayWeatherContainer>
                                </GridListTile>
                            })}
                        </GridList>
                    } else return <div></div>
                })()}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllWeatherContainer);