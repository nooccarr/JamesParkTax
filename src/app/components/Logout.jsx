import { useNavigate } from 'react-router-dom';

const Logout = ({ username, removeCookie }) => {
  const navigate = useNavigate();
  console.log({ username, removeCookie });
  const handleLogout = () => {
    removeCookie('token', { httpOnly: true, sameSite: 'None', secure: true });
    navigate('/');
  };

  return (
    <div className="flex justify-center py-20">
      <div className="form_container">
        <div className="font-semibold text-center pb-5">
          <h4>Logged in as</h4>
          <span className="text-[#043a49]">{username}</span>
        </div>
        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;