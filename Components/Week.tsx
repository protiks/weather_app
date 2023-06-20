import { Box } from "@mui/material";
import BasicCard from "./BasicCard";
import { WeatherResponse } from "../Utils/types";

interface Props {
  forecast: WeatherResponse["daily"];
}

const Week = ({ forecast }: Props) => {
  if (!forecast || forecast.length === 0) {
    return null
  }

  return (
    <Box
      m={2}
      sx={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
      }}
    >
      {forecast.slice(1, 7).map((day) => (
        <Box m={2} key={day.dt}>
          <BasicCard
            temp={Math.floor(day.temp.day - 273.15)}
            clouds={day.clouds}
            description={day.weather[0].description}
            date={day.dt}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Week;
