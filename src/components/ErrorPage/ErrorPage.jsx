import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Opps !!! </h1>
            <Link to="/"><button >Home</button></Link>
        </div>
    );
};

export default ErrorPage;