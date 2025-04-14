import Card from "../../../components/CardBtp";

const MostSeenTrainings = ({ title, description, trainings }) => {
  return (
    <section className="flex flex-col gap-12 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-20 mt-10">
      <div className="text-center space-y-4">
        <h2 className="font-extrabold text-2xl md:text-4xl text-gray-800">{title}</h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">{description}</p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 max-w-[1400px]">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="w-full sm:w-[45%] md:w-[30%] xl:w-[22%] transition-transform hover:scale-105"
            >
              <Card
                imageUrl={training.image}
                title={training.title}
                duration={training.duration}
                id={training.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSeenTrainings;
