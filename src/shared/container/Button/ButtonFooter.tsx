interface IButtonFooter {
  icon: React.ReactNode;
  redirect_url: string;
}

const ButtonFooter = ({ icon, redirect_url }: IButtonFooter) => {
  return (
    <a href={redirect_url} target="_blank" rel="noopener noreferrer">
      <div className="rounded-full bg-white p-2">{icon}</div>
    </a>
  );
};

export default ButtonFooter;
