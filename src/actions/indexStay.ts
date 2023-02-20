import { Sector } from "../types";

const indexStay = (stay: boolean | string, sectors: Sector[]): number => {
  const type = typeof stay;
  if (type === "boolean" && !stay) { return sectors.length - 2 };
  let index: number = 0;
  for (let i = sectors.length - 1; i > 0; i--) {
    const sector = sectors[i];
    if ((type === "boolean" && sector.stay) || sector.stay === stay) {
      index = i;
      break;
    }
  }
  return index;
};

export default indexStay;