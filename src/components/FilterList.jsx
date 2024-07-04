import React from 'react';
import mapicon from '../assets/place.png';
import sortIcon from '../assets/sort-az.png';
import filterIcon from '../assets/funnel.png';

const FilterList = () => {
  return (
    <div className={`sortBar flex items-center justify-center gap-4 h-2`}>
                <img className={`h-4`} src={filterIcon} alt="" srcset="" />
                <img className={`h-4`} src={sortIcon} alt="" srcset="" />
            </div>
  )
}

export default FilterList