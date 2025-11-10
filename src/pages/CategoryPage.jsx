import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "LA_TUA_API_KEY_TMBD";
const BASE_URL = "https://api.themoviedb.org/3";

const CategoryPage = () => {
  const { category } = useParams(); // es: "tv" o "movie"
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/discover/${category}?api_key=${API_KEY}&language=it-IT`
        );
        const data = await res.json();
        setItems(data.results);
      } catch (error) {
        console.error("Errore caricamento dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {items.map((item) => (
        <div key={item.id} className="text-white">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title || item.name}
            className="rounded-lg"
          />
          <h3 className="mt-2 text-sm">{item.title || item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
