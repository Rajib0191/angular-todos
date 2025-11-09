export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface Stats {
  total: number;
  active: number;
  completed: number;
}
