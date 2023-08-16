import { useParams } from "react-router-dom";

function About(){
  const params = useParams();
const {name} = params;
    return(
        <div>
            <h1>About {name} Component </h1>
        </div>
    );
}
export default About;