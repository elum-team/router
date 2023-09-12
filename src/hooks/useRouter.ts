import { useEffect, useRef, useState } from "react";
import { getter, useGlobalValue } from "elum-state";
import {
  ACTIVE_APP,
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_POPOUT,
  ACTIVE_VIEW
} from "../atoms";

const listAtom = {
  app: ACTIVE_APP,
  view: ACTIVE_VIEW,
  panel: ACTIVE_PANEL,
  modal: ACTIVE_MODAL,
  popout: ACTIVE_POPOUT
}

const useRouter = (atom: keyof typeof listAtom): string => {

  const snapshot = useRef(getter(ACTIVE_APP)).current;

  const atomValue = useGlobalValue(listAtom[atom]);
  const [value, setValue] = useState(atomValue);

  useEffect(() => {
    if (atom === "app" || getter(ACTIVE_APP) === snapshot) {
      setValue(atomValue)
    }
  }, [atomValue]);

  return value;

}


export default useRouter;
