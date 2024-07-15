export interface IServiceMenu {
  id: number;
  title: string;
  desc: string;
  redirect_url: string;
  image_url: string;
  image_position?: 'start' | 'end';
}
