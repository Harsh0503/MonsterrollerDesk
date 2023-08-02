

// import searchBox from './searchBoxcomponent.jsx'

import './searchBoxcomponent.style.css'

const searchBox =({className,placeholder,onChangehandler})=> (

     
   
        <input
        className = {className}
        placeholder= {placeholder}
        type='Search'
        onChange={onChangehandler}
       />
    
)


export default searchBox ;