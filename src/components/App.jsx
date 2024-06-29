import Profile from "./Profile/Profile";
import userData from "../components-JSON/userData.json";

import FriendList from "./FriendList/FriendList";
import friends from "../components-JSON/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../components-JSON/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
