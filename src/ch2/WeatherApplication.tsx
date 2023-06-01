import { ChangeEvent, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="search-box">
      <input type="text" value={query} onChange={handleChange} />
      <button>Search</button>
      <div className="search-results">{query}</div>
    </div>
  );
};

type WeatherType = {
  cityName: string;
  temperature: number;
  weather: string;
};
const Weather = ({ cityName, temperature, weather }: WeatherType) => {
  return (
    <div>
      <span>{cityName}</span>
      <span>{temperature}</span>
      <span>{weather}</span>
    </div>
  );
};

const WeatherList = () => {
  return (
    <>
      <Weather cityName="Melbourne" temperature={4} weather="Windy" />
      <Weather cityName="Beijing" temperature={24} weather="Clear" />
    </>
  );
};

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Notification = () => {
  return (
    <div>
      <h3>Stay Informed</h3>
      <p>Get a notification when a severe weather alert ...</p>
      <button>Enable Notifications</button>
    </div>
  );
};

const WeatherApplication = () => {
  return (
    <>
      <Heading title="Weather" />
      <SearchBox />
      <Notification />
      <WeatherList />
    </>
  );
};

export default WeatherApplication;
