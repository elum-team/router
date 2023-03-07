export type Sector = {
  panel: string;
  modal?: string;
  popout?: string;
  stay?: boolean | string;
  freeze?: boolean;
  params: Record<string, ParamsData>;
} & Record<string, any>;

export type ParamsData = string | number | boolean;
