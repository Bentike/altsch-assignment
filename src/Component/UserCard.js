import './Styles/UserCard.css';

const UserCard = (props) => {
    console.log(props.data.picture.large);
    const {gender, email, phone} = props.data;    
    return(
        <div className="card">
            <img alt="user"/>
            <p className="cardcontent">{gender}</p>
            <p className="cardcontent">{email}</p>
            <p className="cardcontent">{phone}</p>
        </div>
    );
}

export default UserCard;