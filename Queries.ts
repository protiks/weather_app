import { useQuery } from "@tanstack/react-query";

const apiKey= process.env.NEXT_PUBLIC_KEY

export const useWeather = (lat: string, lon: string) => {
    // console.log(apiKey)
    const enabled = !!lat && !!lon
    return useQuery({
        queryKey: ['weatherData'],
        queryFn: () => fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
        ).then((res) => res.json()),
        enabled: enabled
    });
};


export const useLocation = (city: string, limit = 1) => {
    const query = `${city}`;

    return useQuery({
        queryKey: ['location', query],
        queryFn: () => fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${apiKey}`
        ).then((res) => res.json()),
        enabled: !!query,
    });
};