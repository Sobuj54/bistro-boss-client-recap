const SectionTitle = ({ heading, subHeading }) => {
  return (
    <section className="md:w-4/12 mx-auto my-10 text-center">
      <p className="text-yellow-500">---- {subHeading} ---</p>
      <h3 className="text-4xl border-y-4 p-2">{heading}</h3>
    </section>
  );
};

export default SectionTitle;
