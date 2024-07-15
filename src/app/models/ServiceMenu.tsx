import { type IServiceMenu } from './serviceinterfaces';

export const SERVICE_DATA: IServiceMenu[] = [
  {
    id: 1,
    title: 'Kartu Tanda Penduduk',
    desc: 'Pelayanan pembuatan dan penggantian KTP baru atau hilang melalui layanan PELAKAD.',
    redirect_url: '/ktp',
    image_url:
      'https://utfs.io/f/9063677a-5ad2-4bb2-8ebb-ede376e3fdf6-1jgc2.png',
    image_position: 'start',
  },
  {
    id: 2,
    title: 'Kartu Keluarga',
    desc: 'Pelayanan pembuatan KK baru, pergantian, atau penggantian hilang dengan mudah melalui layanan PELAKAD.',
    redirect_url: '/kk',
    image_url:
      'https://utfs.io/f/ca1e6bee-39b4-450a-9a2e-8cd79f3f931a-1tf88.png',
    image_position: 'end',
  },
  {
    id: 3,
    title: 'Akta Kelahiran',
    desc: 'Pelayanan pembuatan Akta Kelahiran secara online melalui layanan kami dengan cepat dan mudah.',
    redirect_url: '/akta-kelahiran',
    image_url:
      'https://utfs.io/f/ceaa79a7-3eb6-47a5-b23e-62a29fc5514f-f0eqer.png',
    image_position: 'start',
  },
  {
    id: 4,
    title: 'Akta Kematian',
    desc: 'Pelayanan pendampingan dan pelaporan bagi korban kekerasan seksual dan perundungan',
    redirect_url: '/akta-kematian',
    image_url:
      'https://utfs.io/f/ddb23995-3dd4-4af0-b7af-4db7df465742-1wh9r.png',
    image_position: 'end',
  },
];
