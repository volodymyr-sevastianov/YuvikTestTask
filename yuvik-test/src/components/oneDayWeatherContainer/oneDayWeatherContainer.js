import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width: '100%'
      },
});

export default function OneDayWeatherContainer(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                    className={classes.media}
                    image="https://www.conservationmagazine.org/wp-content/uploads/2016/08/offshore-wind-turbulence.jpg"
                    title="Paella dish"
                />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {(()=>{
                        let temp = Math.round((props.weather.low + props.weather.high) / 2)
                        if (props.units === 'celsius'){
                            return `${Math.round((temp-32)*(5/9))} °C` //THIS FORMULA ONLY FOR HARDCODE MODE. If auth is working correctly it doesn`t needed.
                        }
                        return `${temp} °F`
                    })()}
                </Typography>
                <Typography variant="h6" component="h3">
                    {props.weather.text}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {(()=>{
                        let date = new Date();
                        date.setTime(props.weather.date*1000);                        
                        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                    })()}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.weather.day}
                </Typography>
            </CardContent>
        </Card>
    );
}