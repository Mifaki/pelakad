interface ICustomLabel {
  children: React.ReactNode;
}

const CusttomInputLabel = ({ children }: ICustomLabel) => (
  <span className="text-black` text-base font-semibold">{children}</span>
);

export default CusttomInputLabel;
