import './Styles/UserCard.css';

const UserCard = (props) => {
    const {gender, email, phone} = props.data;
    return(
        <div className="card">
            <p className="cardcontent">{gender}</p>
            <p className="cardcontent">{email}</p>
            <p className="cardcontent">{phone}</p>
        </div>
    )
}

export default UserCard;