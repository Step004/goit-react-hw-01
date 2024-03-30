import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.cardsList}>
      {friends.map((friend) => (
        <div className={css.card} key={friend.id}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p className={css.name}>{friend.name}</p>
          <p className={friend.isOnline ? css.onlineStatus : css.offlineStatus}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
};
