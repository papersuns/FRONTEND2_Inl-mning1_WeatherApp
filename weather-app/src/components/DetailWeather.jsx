import React from 'react';

const DetailWeather = ({data}) => {
    
    var date;
    var city;
    var temp;
    var description;
    var img;

    if (typeof data !== 'undefined') {
        date = data.currentDay.dt_txt.substring(0,16);
        city = data.city.name;
        temp = data.currentDay.main.temp;
        description = data.currentDay.weather[0].description;
        img = "http://openweathermap.org/img/wn/"+data.currentDay.weather[0].icon+"@2x.png";
    }

    return (<React.Fragment>
                <div className="detailDiv">
                    <div className="detailImg">
                        <img src={img} className="bigImg" alt="weather icon"/>
                    </div>
                    <div className="detailInfo">
                        <h2>Today</h2>
                        <h3>{date}</h3>
                        <h1>{city}</h1>
                        <h2>{temp} &#8451;</h2>
                        <h3>{description}</h3>
                    </div>
                </div>
            </React.Fragment>);
}

export default DetailWeather;