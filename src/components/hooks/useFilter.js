import React,{useState} from 'react';
import Select from 'react-select';
import styled from "@emotion/styled";

const useFilter =()=>{
    
    const [selectedOption, setSelectedOption] = useState(null);
    
    const SelectUI = ({options}) =>{
        return options.length > 1 ? (
                <ContainerSelect>
                <Label>
                Filtrar 
                <Select
                    isClearable
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options} 
                />
                </Label>
                </ContainerSelect>
                ):null;
            };
            return {
            SelectUI,
            selectedOption
        };
        
    }

export default useFilter;


const ContainerSelect = styled.div`
    margin: 2rem 0;
`;

const Label = styled.label``;