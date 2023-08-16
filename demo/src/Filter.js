 import { useSearchParams } from "react-router-dom";
 function Filter(){
    const [serachParams,setSearchParams] = useSearchParams();
    // for get query param
    const age = serachParams.get('age');
    const city = serachParams.get('city');
    return(
        <div>
            <h1>City is : {city}</h1>
            <h2>Age is : {age}</h2>

            {/* for set query param on button click */}
            <button onClick={()=>setSearchParams({age:25,city:"Indore"})}>Click</button>
        </div>
    )
}
export default Filter;