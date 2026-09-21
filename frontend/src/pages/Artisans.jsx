import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import {
  getArtisans,
  searchArtisans,
  getArtisansByCategory,
} from "../services/api";

function Artisans() {
  const [searchParams] = useSearchParams();

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const recherche = searchParams.get("recherche");
  const categorie = searchParams.get("categorie");

  useEffect(() => {
    const loadArtisans = async () => {
      try {
        setLoading(true);
        setError("");

        let data;

        if (recherche) {
          data = await searchArtisans(recherche);
        } else if (categorie) {
          data = await getArtisansByCategory(categorie);
        } else {
          data = await getArtisans();
        }

        setArtisans(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadArtisans();
  }, [recherche, categorie]);

  if (loading) {
    return (
      <main className="container py-5 text-center">
        <p>Chargement...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-5 text-center">
        <p className="text-danger">{error}</p>
      </main>
    );
  }

  let title = "Les artisans";

  if (recherche) {
    title = `Résultats pour : "${recherche}"`;
  } else if (categorie) {
    title = "Artisans de la catégorie";
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">{title}</h1>

      {artisans.length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : (
        <div className="row">
          {artisans.map((artisan) => (
            <div className="col-md-6 col-lg-4 mb-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Artisans;
