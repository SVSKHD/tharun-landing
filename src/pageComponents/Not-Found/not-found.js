import NOTFOUND from "../../Assests/AQN.jpg";
import Button from "react-bootstrap/Button";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const Navigate = useNavigate()
    const RedirectToHome = () =>(<Navigate to="/"/>)
  return (
    <>
      <div className="text-center">
        <img src={NOTFOUND} alt="Aquakart Not found" />
        <br />
        <Button onClick={RedirectToHome}>
          <FaHome size={22} /> go back to Home{" "}
        </Button>
      </div>
    </>
  );
};
export default NotFound;
