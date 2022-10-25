import './Styles/UserCard.css';

const UserCard = (props) => {
    const {gender, email, phone} = props.data;
    const {medium} = props.data.picture.medium;
    return(
        <div className="card">
            <img src={medium} alt="user"/>
            <p className="cardcontent">{gender}</p>
            <p className="cardcontent">{email}</p>
            <p className="cardcontent">{phone}</p>
        </div>
    );
}

export default UserCard;