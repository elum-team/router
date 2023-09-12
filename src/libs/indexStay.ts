import { Sector } from "../types";

const indexStay = (stay: boolean | string, sectors: Sector[]): number => {
  const type = typeof stay;
  if (type === "boolean" && !stay) {
    return sectors.length - 2
  };

  const typeStay = type === "boolean" ? Boolean : String;

  for (let i = sectors.length - 1; i > 0; i--) {
    const sector = sectors[i];
    if (typeStay(sector.stay) === stay) {
      return i;
      break;
    }
  }

  return 0;

};

export default indexStay;