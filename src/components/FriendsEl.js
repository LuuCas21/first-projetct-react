import './FriendsEl.css';

function FriendsEl(props) {
    return (
        <div className="friendDiv">
            <div className="friendName">
                <p className="name">{props.name}</p>
            </div>
            <div className="friendYear">
                <p className="year">{props.year}</p>
            </div>
        </div>
    );
};

export default FriendsEl;