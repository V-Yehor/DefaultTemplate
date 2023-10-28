export const Profile = ({ username, imgUrl, email, age }) => {
  return (
    <div>
      <img src={imgUrl} alt={username} width="120" height="120" />
      <p><b>Username</b> {username}</p>
      <p><b>Email</b> {email}</p>
      <p><b>Age</b> {age}</p>
    </div>
  );
};