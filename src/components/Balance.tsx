import { useSelector } from "react-redux";
import { RootState } from "../utils/types";

const Balance = () => {
  const balance = useSelector<RootState, number>(state => state.balance);
  const quote = useSelector<RootState, string>(state => state.quote)

  return (
    <div className="text-center text-uppercase">
      <h1>Iron Bank of Braavos</h1>
      <h3><q>{quote}</q></h3>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance