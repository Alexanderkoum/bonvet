import React,{useState} from 'react';
import PersonList from './PersonList';

const SearchBar = ({placeholder,data}) => {

    const [filteredData, setFilteredData] = useState([]);
  return (
    <div className={`search my-5`}>
        <div className={`searchInput bg-slate-50 rounded-full py-3 px-5 grid gap-4 grid-flow-col-dense grid-cols-12 mx-5 `}>
            <input className={`bg-slate-50 focus:outline-none col-span-12`} type="text" name="" id="" placeholder={placeholder} />
            <div className="searchIcon col-span-1"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
        </div>
    </div>
  )
}

export default SearchBar