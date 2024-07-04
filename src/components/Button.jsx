import React from 'react';

const Button = ({styles,value}) => {
    return(
        <button type="button" className={`px-6 py-3 rounded-full text-slate-100 bg-green-900 font-poppins text-[18px]`}>
            {value}
        </button>
    )
}

export default Button