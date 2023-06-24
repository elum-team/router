import { ParamsData } from "types";
import { ACTIVE_NOTIFY } from "../atoms";
import { useGlobalValue } from "elum-state";

type UseNotify = () => {
  type?: string;
  params: Record<string, ParamsData>;
}

const useNotify: UseNotify = () => {
  const data = useGlobalValue(ACTIVE_NOTIFY);
  if (!data) { return { type: undefined, params: {} } };
  return { type: data.type, params: data.params };
}

export default useNotify;
