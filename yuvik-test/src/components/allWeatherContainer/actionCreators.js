import axios from "axios";
import { yahooApiUrl } from "../../consts/constants";
import { GET_WEATHER } from "../../consts/actions";
import * as CryptoJS from 'crypto-js'
import weather from "./hardcode"
import {weatherKey} from "../../consts/constants"

function getWeather(payload) {
    return (dispatch) => {
        localStorage.setItem(weatherKey, JSON.stringify(weather)); //HARDCODE HERE! REMOVE WHEN AUTH IS POSSIBLE
        navigator.geolocation.getCurrentPosition(position => {
            var method = 'GET';
            var app_id = 'aPWXPk56';
            var consumer_key = 'dj0yJmk9QnFMVmhhM1lvZ01BJmQ9WVdrOVlWQlhXRkJyTlRZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE2';
            var consumer_secret = '08e5c57d11b96758621d5ddd79379507263fe5dc';
            var concat = '&';
            var query = { 'lon': position.coords.longitude, 'lat': position.coords.latitude, 'format': 'json', "u": payload };
            var oauth = {
                'oauth_consumer_key': consumer_key,
                'oauth_nonce': Math.random().toString(36).substring(2),
                'oauth_signature_method': 'HMAC-SHA1',
                'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
                'oauth_version': '1.0'
            };
            var merged = {};
            Object.assign(merged, query, oauth);
            var merged_arr = Object.keys(merged).sort().map(function (k) {
                return [k + '=' + encodeURIComponent(merged[k])];
            });
            var signature_base_str = method
                + concat + encodeURIComponent(yahooApiUrl)
                + concat + encodeURIComponent(merged_arr.join(concat));
            var composite_key = encodeURIComponent(consumer_secret) + concat;
            var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
            var signature = hash.toString(CryptoJS.enc.Base64);
            oauth['oauth_signature'] = signature;
            var auth_header = 'OAuth ' + Object.keys(oauth).map((k) => {
                return [k + '="' + oauth[k] + '"'];
            }).join(',');
            let queryString = "?";
            for (let prop in query){
                queryString += prop + "=" + query[prop] + concat
            }
            axios.get("https://cors-anywhere.herokuapp.com/" + yahooApiUrl + queryString, {
                headers: {
                    'Authorization': auth_header,
                    'X-Yahoo-App-Id': app_id
                }
            }).then((res) => {
                localStorage.setItem(weatherKey, JSON.stringify(res.data));
                dispatch({
                    type: GET_WEATHER,
                    payload: res.data
                })
            }, (rej) => {
                let savedWeather = JSON.parse(localStorage.getItem(weatherKey));
                dispatch({
                    type: GET_WEATHER,
                    payload: savedWeather
                })
            })
        });
    }
}

export default getWeather;