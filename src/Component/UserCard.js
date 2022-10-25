import './Styles/UserCard.css';

const UserCard = (props) => {
    const large = props.data.picture.large;
    const {gender, email, phone} = props.data;
    const {title, first, last} = props.data.name;    
    return(
        <div className="card">
            <img src={large} alt="user"/>
            <p className='username'>{title} {first} {last}</p>
            <p className="cardcontent">{gender}</p>
            <p className="cardcontent">{email}</p>
            <p className="cardcontent">{phone}</p>
        </div>
    );
}

export default UserCard;