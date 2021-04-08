import React, {useState} from 'react';
import Search from '../components/Search';
import OverviewWeather from '../components/OverviewWeather';
import DetailWeather from '../components/DetailWeather';

const WeatherContainer = () => {

    const defaultDetail = () => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&APPID=492e9731fb51080bc24e024ff9256943")
        .then(response => response.json())
        .then(item => { 
            
            var details = {city:item.city, currentDay:item.list[0]};
            setDetailData(details);
            return details;
        });
     }

     const defaultOverview = () => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&APPID=492e9731fb51080bc24e024ff9256943")
        .then(response => response.json())
        .then(item => { 
            
            var currentDay = item.list[0];
            var comingDays = item.list.filter(day => day.dt_txt.endsWith('12:00:00') && day.dt_txt.substring(0,10) !== currentDay.dt_txt.substring(0,10));
            if (comingDays.length>4) {
                comingDays.pop();
            }
    
            setOverviewData(comingDays);
            return comingDays;
        });
     }
     
    const [detailData, setDetailData] = useState(() => {
        const initialState = defaultDetail();
        return initialState;
    });

    const [overviewData, setOverviewData] = useState(() => {
        const initialState = defaultOverview();
        return initialState;
    });   


    const search = (searchVal) => {
        const url = "http://api.openweathermap.org/data/2.5/forecast?q="+searchVal+"&units=metric&APPID=492e9731fb51080bc24e024ff9256943";
        GetData(url);
     }   

function GetData(url) {

    fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('No actual city entered');
        }
      })
      .then((item) => {
        var currentDay = item.list[0];
        var details = {city:item.city, currentDay:item.list[0]};

        var comingDays = item.list.filter(day => day.dt_txt.endsWith('12:00:00') && day.dt_txt.substring(0,10) !== currentDay.dt_txt.substring(0,10));
        if (comingDays.length>4) {
            comingDays.pop();
        }

        setDetailData(details);
        setOverviewData(comingDays);
      })
      .catch((error) => {
        console.log(error)
      });
 }


    return(<React.Fragment>
                <Search search={search} />
                <DetailWeather data={detailData} />
                <OverviewWeather data={overviewData} />
    </React.Fragment>);
}

export default WeatherContainer;




