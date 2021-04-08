import React from 'react';

const OverviewWeather = ({data}) => {

    var all;
    var img = [];

    if (typeof data === 'undefined') {
        all =  [{dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]}];
    }
    else
    {
        all = data;
    }

    all.forEach(item => {
        img.push("http://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png");
    });

    
    return (<React.Fragment>
            <div className="overviewDiv">
                <div className="overviewBox">
                    <h4>{all[0].dt_txt.substring(0,10)}</h4>
                    <img src={img[0]} alt="weather icon"/>
                    <p>{all[0].main.temp}&#8451;</p>
                    </div>
                <div className="overviewBox">
                    <h4>{all[1].dt_txt.substring(0,10)}</h4>
                    <img src={img[1]} alt="weather icon"/>
                    <p>{all[1].main.temp}&#8451;</p>
                    </div>
                <div className="overviewBox">
                    <h4>{all[2].dt_txt.substring(0,10)}</h4>
                    <img src={img[2]} alt="weather icon"/>
                    <p>{all[2].main.temp}&#8451;</p>
                    </div>
                <div className="overviewBox">
                    <h4>{all[3].dt_txt.substring(0,10)}</h4>
                    <img src={img[3]} alt="weather icon"/>
                    <p>{all[3].main.temp}&#8451;</p>
                    </div>
            </div>
    </React.Fragment>);
}

export default OverviewWeather;