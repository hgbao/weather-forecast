import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AntdAutoComplete, Empty as AntdEmpty, Input as AntdInput } from 'antd';
import _debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import RequestSearchBar from './Request';
import styles from './styles.module.less';

const SearchBar = ({ options, onSearch, onSelect, isLoading }) => {
  const [value, setValue] = useState();

  // Handlers
  const handleChange = useCallback((value) => setValue(value), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    _debounce((value) => onSearch(value), 300),
    []
  );

  const handleSelect = useCallback(
    (value, instance) => {
      setValue(instance.label); // Set current value as result
      onSelect(value, instance);
    },
    [onSelect]
  );

  // Render
  return (
    <AntdAutoComplete
      className={styles.container}
      value={value}
      options={options || []} // FIXME: options === undefined will cause a display bug for ANTD
      onChange={handleChange}
      onSearch={handleSearch}
      onSelect={handleSelect}
      notFoundContent={options && <AntdEmpty />}
      allowClear
    >
      <AntdInput
        size="large"
        prefix={isLoading ? <LoadingOutlined /> : <SearchOutlined />}
        placeholder="Search"
      />
    </AntdAutoComplete>
  );
};

SearchBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  isLoading: PropTypes.bool,
};

SearchBar.defaultProps = {
  options: undefined,
  onSearch: () => {}, // (query) => {}
  onSelect: () => {}, // (value, instance) => {}
  isLoading: false,
};

// Sub-components
SearchBar.Request = RequestSearchBar;

export default SearchBar;
