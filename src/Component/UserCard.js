import './Styles/UserCard.css';

const UserCard = ({gender, email, phone}) => {
    return(
        <div className="card">
            <p className="cardcontent">{gender}</p>
            <p className="cardcontent">{email}</p>
            <p className="cardcontent">{phone}</p>
        </div>
    )
}

export default UserCard;