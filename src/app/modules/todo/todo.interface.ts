export type TTodo = {
  id: string;
  title: string;
  status: 'Todo' | 'In-Progress' | 'Done' | 'Canceled';
  priority: 'High' | 'Medium' | 'Low';
  label: 'Bug' | 'Feature' | 'Documentation' | 'Enhancement';
};
