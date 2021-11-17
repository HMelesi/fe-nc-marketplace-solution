import { useState } from "react";
import { postUser } from "../utils/api";

const CreateUser = () => {
  const [body, setBody] = useState({
    username: "",
    avatar_url: "",
  });
  const [alert, setAlert] = useState(null);

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setBody((currBody) => {
      let copyBody = Object.assign({}, currBody);
      copyBody[id] = value;
      return copyBody;
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    postUser(body).then((user) => {
      setAlert(`User ${user.username} created!`);
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      setBody({
        username: "",
        avatar_url: "",
      });
    });
  };

  const renderAlert = () => {
    if (alert) {
      return (
        <p className="shopitems__container__item__message__alert">{alert}</p>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <p>Fill out the details below to create a new user</p>
      <form className="itemForm" onSubmit={handleOnSubmit}>
        <label htmlFor="item_name">USERNAME:</label>
        <input
          className="itemForm__input"
          required
          value={body.username}
          id="username"
          onChange={handleOnChange}
        />
        <label htmlFor="description">AVATAR URL:</label>
        <input
          className="itemForm__input"
          required
          value={body.avatar_url}
          id="avatar_url"
          onChange={handleOnChange}
        />
        <button className="secondaryButton">CREATE USER</button>
        <div className="shopitems__container__item__message__space">
          {renderAlert()}
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
