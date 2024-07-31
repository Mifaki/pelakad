import { type IDashboardStatistics } from '~/shared/models/dashboardinterfaces';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import DashboardCard from './card/DashboardCard';

const DashboardContainer = ({
  data,
  error,
  isLoading,
}: IGeneralAPIResponse<IDashboardStatistics>) => {
  if (!data) return <div>No data available</div>;

  const cards = [
    {
      title: 'Kartu Tanda Penduduk',
      number: data.total_ktp_request,
      link: '/dashboard/ktp',
    },
    {
      title: 'Kartu Keluarga',
      number: data.total_kk_request,
      link: '/dashboard/kk',
    },
    {
      title: 'Akta Lahir',
      number: data.total_birth_cert_request,
      link: '/dashboard/akta-lahir',
    },
    {
      title: 'Akta Kematian',
      number: data.total_death_cert_request,
      link: '/dashboard/akta-mati',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-heading-6 font-semibold">Jumlah Permohonan</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            number={card.number}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardContainer;
