import AquaFooter from "./Footer";
import NavHead from "./Header";
const CommonLayout = (props) => {
  return (
    <>
      <NavHead />
      {props.children}
      <AquaFooter />
    </>
  );
};
export default CommonLayout;
