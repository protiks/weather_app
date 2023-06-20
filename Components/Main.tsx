import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../Utils/AppContext";
import Week from './Week';
import Current from './Current';
import EmptyWeek from './EmptyWeek';
import EmptyCurrent from './EmptyCurrent';
import { useLocation, useWeather } from '../Utils/Queries';

const absolute_zero = 273.15;

const Main = () => {
    const { city } = useContext(AppContext);
    const [LAT, setLAT] = useState('0')
    const [LON, setLON] = useState('0')
    const [name, setName] = useState(city)

    const { data: locationData } = useLocation(city);
    const { isLoading: isWeatherLoading, data: weatherData, refetch } = useWeather(LAT, LON);

    useEffect(() => {
        if (locationData && locationData[0]) {
          const formatName = `${locationData[0].name || ''}, ${locationData[0].state || ''} ${locationData[0].country || ''}`;
          setName(formatName);
          setLAT(locationData[0].lat)
          setLON(locationData[0].lon)
        }
      }, [locationData, city]);
      

    useEffect(() => {
        if (LAT !== '0' && LON !== '0') {
            refetch()
        }
    }, [LAT, LON, refetch]);

    if (isWeatherLoading) {
        return (
            <>
                <EmptyCurrent />
                <EmptyWeek />
            </>
        );
    }

    return (
        <>
            <Current
                wind={weatherData?.current?.wind_speed}
                city={name}
                isLoading={false}
                temp={weatherData?.current?.temp ? Math.floor(weatherData.current.temp - absolute_zero) : 0}
                main={weatherData?.daily?.[0]?.weather?.[0]?.main || 'N/A'}
                offset={weatherData.timezone_offset}
                date={weatherData?.current?.dt ? new Date(weatherData.current.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                }) : 'N/A'}
            />
            <Week forecast={weatherData.daily} />
        </>
    );
};

export default Main;
