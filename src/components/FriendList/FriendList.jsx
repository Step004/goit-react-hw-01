import css from "./FriendList.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <div className={css.card} key={id}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.onlineStatus : css.offlineStatus}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <div className={css.cardsList}>
      {friends.map((friend) => (
        <ul key={friend.id}>
          <li>
            <FriendListItem
              id={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

