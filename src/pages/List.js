import {Link} from "react-router-dom";

function List() {
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

export default List;