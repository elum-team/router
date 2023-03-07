import { getter } from "elum-state";
import { useState } from "react";
import { ParamsData } from "../types";
import { ACTIVE_PARAMS } from "../atoms";

const useParams = <T extends Record<string, ParamsData>>(): T => {
  const [params] = useState(getter(ACTIVE_PARAMS));
  return params as T;
};

export default useParams;
