import { useGlobalValue } from "elum-state";
import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_POPOUT, ACTIVE_VIEW } from "../atoms";

const listAtom: Record<string, any> = {
  view: ACTIVE_VIEW,
  panel: ACTIVE_PANEL,
  modal: ACTIVE_MODAL,
  popout: ACTIVE_POPOUT
}

type TAtoms = "view" | "panel" | "modal" | "popout";

const useRouter = (atom: TAtoms): string => {
  const state = useGlobalValue<string>(listAtom[atom]);
  return state;
}

export default useRouter;
