import { useEffect } from "react";
import BasicModal from "./modal";
import { useStateContext } from "../context/Context";

export default function Summary() {
  const { setCartItems, setTotalPrice,setTotalQuantities } = useStateContext();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    useEffect(()=>{
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
    },[]);
    return (
      <div>
        <BasicModal />
        <h1 style={{ textAlign: "center", margin: "20px 0 250px" }}>
          Order Placed
        </h1>
      </div>
    );
  }