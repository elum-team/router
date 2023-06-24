import { ACTIVE_NOTIFY } from "../atoms";
import { useGlobalValue } from "elum-state";

const useNotify = () => {
  const data = useGlobalValue(ACTIVE_NOTIFY);
  if (!data) { return { type: undefined, params: {} } };
  return { type: data.type, params: data.params };
}

export default useNotify;
