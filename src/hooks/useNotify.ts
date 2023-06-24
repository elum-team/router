import { ACTIVE_NOTIFY } from "../atoms";
import { useGlobalValue } from "elum-state";

const useNotify = () => {
  const { type, params } = useGlobalValue(ACTIVE_NOTIFY);
  return { type, params };
}

export default useNotify;
