import {Link} from "react-router-dom";

function Signin() {
    return (
        <div className="App">
            <Link to="/">
                <button variant="outlined">
                    home
                </button>
            </Link>
        </div>
    );
}

export default Signin;