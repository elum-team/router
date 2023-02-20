export type Sector = {
  panel: string;
  modal?: string;
  popout?: string;
  stay?: boolean;
  freeze?: boolean;
  params: Record<string, string | number>;
} & Record<string, any>;
