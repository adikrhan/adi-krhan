import SizeContext from "./size-context";
import useWindowResize from "../hooks/use-window-resize";

const SizeProvider = (props) => {
  const [width, height] = useWindowResize();

  const sizeContext = {
    width: width,
    height: height
  };

  return (
    <SizeContext.Provider value={sizeContext}>
      {props.children}
    </SizeContext.Provider>
  );
};

export default SizeProvider;
