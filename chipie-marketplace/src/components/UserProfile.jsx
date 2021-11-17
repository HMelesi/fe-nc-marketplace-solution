import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchOrders } from "../utils/api";
import Loading from "./Loading";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setisLoading(true);
    fetchOrders(user).then((itemsFromApi) => {
      setOrders(itemsFromApi);
      setisLoading(false);
    });
  }, [user]);

  return (
    <Loading isLoading={isLoading}>
      <p>{user} profile</p>
      <p>past orders:</p>
      {orders.map((item) => {
        return (
          <div key={item.item_id}>
            <img alt={item.item_name} src={item.img_url} />
            <p>{item.item_name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </Loading>
  );
};

export default UserProfile;
