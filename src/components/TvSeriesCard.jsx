const TvSeriesCard = ({ serie }) => {
  return (
     <div className="relative bg-black rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300">
      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
        alt={serie.name}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold mb-1">{serie.name}</h3>
        {serie.first_air_date && (
          <span className="text-gray-300 text-sm mb-2">{new Date(serie.first_air_date).getFullYear()}</span>
        )}
        {serie.vote_average && (
          <span className="text-yellow-400 font-bold">{serie.vote_average.toFixed(1)} ★</span>
        )}
        {serie.overview && (
          <p className="text-gray-200 text-sm mt-2 line-clamp-3">{serie.overview}</p>
        )}
      </div>
    </div>
  );
};

export default TvSeriesCard;