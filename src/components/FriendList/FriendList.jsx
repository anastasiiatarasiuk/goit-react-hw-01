import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={s.friendsItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
