import PropTypes from "prop-types";
import "./HourlyForecastDetail.css";
import { UNITS } from "../../constants/constants";
import { getIcon } from "../../helpers/getIcon";
import { formatHourAmPm } from "../../helpers/utils";

export function HourlyForecastDetail({ hourlyWeather, units }) {
  return (
    <div className="forecast-hourly" id="current-hour-plus-1">
      <div className="forecast-hourly__day">
        {formatHourAmPm(hourlyWeather.dt)}
      </div>
      <div className="forecast-hourly__temperature">
        <div className="forecast-hourly__temperature-high">
          {Math.round(hourlyWeather.temp)}{" "}
          {units === UNITS.CELSIUS ? "°C" : "°F"}
        </div>
      </div>
      <div className="forecast-hourly__icon">
        {getIcon(hourlyWeather.weather[0].icon)}
      </div>
    </div>
  );
}

HourlyForecastDetail.propTypes = {
  hourlyWeathers: PropTypes.object,
  units: PropTypes.string.isRequired,
};
