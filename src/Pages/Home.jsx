import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  //const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
  // const [searchOption, setSearchOption] = useState('shows');

  //const onSearchInputChange = ev => {
  // setSearchStr(ev.target.value);
  // };

  // const onRadioChange = ev => {
  //  setSearchOption(ev.target.value);
  // };

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result;

      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      <div>No results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {/* <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />

        <label>
          Shows
          <input
            type="radio"
            name="seach-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="seach-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
  */}

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
