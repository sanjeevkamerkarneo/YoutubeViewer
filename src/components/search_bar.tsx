import { useState } from "react";

interface IProps {
  onSearchTermChange: any;
}
const SearchBar = (props: IProps) => {
  const [term, setTerm] = useState('');

  /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */
   const onInputChange = async (term: string) => {
    setTerm(term);
    props.onSearchTermChange(term);
  }

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
