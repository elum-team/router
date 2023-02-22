import { getter } from "elum-state";
import { useState } from "react";
import { ACTIVE_PARAMS } from "../atoms";

const useParams = () => {
  const [params] = useState(getter(ACTIVE_PARAMS));
  return params;
};

export default useParams;
