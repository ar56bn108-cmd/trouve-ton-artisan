import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import { getArtisans, getCategories } from "../services/api";

function Home() {
  const navigate = useNavigate();

  const [artisans, setArtisans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [artisansData, categoriesData] = await Promise.all([
          getArtisans(),
          getCategories(),
        ]);

        setArtisans(artisansData);
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const value = search.trim();

    if (value === "") {
      navigate("/artisans");
      return;
    }

    navigate(`/artisans?recherche=${encodeURIComponent(value)}`);
  };

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

  return (
    <main>
      {/* RECHERCHE */}
      <section className="container py-5 text-center">
        <h1 className="display-4 fw-bold mb-3">Trouve ton artisan !</h1>

        <p className="lead mb-4">
          Trouvez facilement un artisan près de chez vous.
        </p>

        <form
          className="row justify-content-center g-2"
          onSubmit={handleSearch}
        >
          <div className="col-md-7">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Rechercher un artisan..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="col-md-auto">
            <button type="submit" className="btn btn-primary btn-lg">
              Rechercher
            </button>
          </div>
        </form>
      </section>

      {/* ARTISANS DU MOIS */}
      <section className="container py-5">
        <h2 className="mb-4">Les artisans du mois</h2>

        <div className="row">
          {artisans.slice(0, 3).map((artisan) => (
            <div className="col-md-4 mb-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="container py-5">
        <h2 className="mb-4">Les catégories</h2>

        <div className="row">
          {categories.map((categorie) => (
            <div className="col-md-6 col-lg-3 mb-4" key={categorie.id}>
              <button
                type="button"
                className="card h-100 shadow-sm w-100 border"
                onClick={() => navigate(`/artisans?categorie=${categorie.id}`)}
              >
                <div className="card-body text-center">
                  <h3 className="h5 mb-0">{categorie.nom}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
