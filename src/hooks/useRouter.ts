import { useGlobalValue } from "elum-state";
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

const useRouter = (atom: keyof typeof listAtom): string =>
  useGlobalValue(listAtom[atom]);

export default useRouter;
