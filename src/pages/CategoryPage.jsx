import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tmdb } from "../services/tmdb";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (category === "series") {
          data = await tmdb.getPopularTV();
        } else if (category === "movies") {
          data = await tmdb.getPopularMovies();
        } else {
          throw new Error("Categoria non valida");
        }
        setItems(data.results);
      } catch (error) {
        console.error("Errore caricamento dati:", error);
        setError("Si è verificato un errore nel caricamento dei contenuti.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [category]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold text-white mb-6">
        {category === "series" ? "Serie TV Popolari" : "Film Popolari"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
