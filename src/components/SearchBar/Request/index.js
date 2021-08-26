import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import SearchBar from '..';

const RequestSearchBar = ({ onOptionsRequest, onSelect }) => {
  const [options, setOptions] = useState();
  const [isSearching, setIsSearching] = useState(false);

  // Handlers
  const handleSearch = useCallback(
    async (query) => {
      setIsSearching(true);
      setOptions(await onOptionsRequest(query));
      setIsSearching(false);
    },
    [onOptionsRequest]
  );

  const handleSelect = useCallback(
    (value, instance) => {
      handleSearch(instance.label);
      onSelect(value, instance);
    },
    [handleSearch, onSelect]
  );

  // Render
  return (
    <SearchBar
      options={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      isLoading={isSearching}
    />
  );
};

RequestSearchBar.propTypes = {
  onOptionsRequest: PropTypes.func, // (query) => {}
  onSelect: PropTypes.func, // (value, instance) => {}
};

RequestSearchBar.defaultProps = {
  onOptionsRequest: () => {},
  onSelect: () => {},
};

export default RequestSearchBar;
