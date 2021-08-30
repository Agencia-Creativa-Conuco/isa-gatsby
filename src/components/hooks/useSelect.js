import React,{useState} from "react"
import Select from 'react-select'


const useSelect =()=>{

    const [selectedOption, setSelectedOption] = useState(null);

    const SelectUI = ({options}) =>{
        return (
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options} 
            />
            );
        };
         
        return {
            SelectUI,
            selectedOption
        };
        
    }

export default useSelect;