const FormFlowSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="container max-w-[100vw] bg-pd-primary pb-20 md:bg-pd-primary-action md:bg-[url('https://utfs.io/f/095480d5-1b12-4d4e-9a4b-4898ca35c288-ywdpqa.png')]"
    >
      <h2 className="mb-9 pt-[100px] text-center text-heading-4 font-bold md:text-heading-2 md:text-white">
        Alur Pendaftaran
      </h2>
      <img
        src="https://utfs.io/f/07923b9b-2a11-4e32-801e-7836e90c2a38-1s8p4.png"
        alt="Alt Image"
        className="block h-fit w-full object-cover md:hidden"
      />
      <img
        src="https://utfs.io/f/a3399bfd-27a3-46ba-bf25-06fab7e26b11-zbhem4.png"
        alt="Alt Image"
        className="hidden h-fit w-full object-cover md:block"
      />
    </section>
  );
};

export default FormFlowSection;
