import { useState } from "react";


const useResults = (inicialValue) =>{

    const [results, setResults] = useState(inicialValue)
    return[
       setResults,
       results
    ]
}

export default useResults