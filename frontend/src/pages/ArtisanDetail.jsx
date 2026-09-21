import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArtisanById, createContact } from "../services/api";

function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  const [contactMessage, setContactMessage] = useState("");
  const [contactError, setContactError] = useState("");

  useEffect(() => {
    const loadArtisan = async () => {
      try {
        const data = await getArtisanById(id);
        setArtisan(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadArtisan();
  }, [id]);

  const handleContact = async (event) => {
    event.preventDefault();

    setContactMessage("");
    setContactError("");

    try {
      const data = await createContact({
        artisan_id: artisan.id,
        nom,
        email,
        objet,
        message,
      });

      setContactMessage(data.message);

      setNom("");
      setEmail("");
      setObjet("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setContactError(error.message);
    }
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

        <Link to="/artisans" className="btn btn-primary mt-3">
          Retour aux artisans
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Link to="/artisans" className="btn btn-outline-secondary mb-4">
        ← Retour aux artisans
      </Link>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <div className="row align-items-start">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={`/images/${artisan.image}`}
                alt={`Image de ${artisan.nom}`}
                className="img-fluid rounded"
                style={{
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md-8">
              <h1 className="mb-4">{artisan.nom}</h1>

              <p>
                <strong>Note :</strong>{" "}
                {"★".repeat(Math.round(Number(artisan.note)))}
                {"☆".repeat(5 - Math.round(Number(artisan.note)))}{" "}
                {artisan.note}/5
              </p>

              <p>
                <strong>Catégorie :</strong> {artisan.categorie}
              </p>

              <p>
                <strong>Spécialité :</strong> {artisan.specialite}
              </p>

              <p>
                <strong>Localisation :</strong> {artisan.ville} (
                {artisan.code_postal})
              </p>

              <p>
                <strong>Téléphone :</strong> {artisan.telephone}
              </p>

              <p>
                <strong>Email :</strong> {artisan.email}
              </p>

              <p>
                <strong>Site web :</strong>{" "}
                <a href={artisan.site_web} target="_blank" rel="noreferrer">
                  {artisan.site_web}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="h4 mb-3">À propos</h2>

            <p>{artisan.description}</p>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <h2 className="mb-4">Contacter cet artisan</h2>

        {contactMessage && (
          <div className="alert alert-success">{contactMessage}</div>
        )}

        {contactError && (
          <div className="alert alert-danger">{contactError}</div>
        )}

        <form onSubmit={handleContact}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>

            <input
              id="nom"
              type="text"
              className="form-control"
              value={nom}
              onChange={(event) => setNom(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="objet" className="form-label">
              Objet
            </label>

            <input
              id="objet"
              type="text"
              className="form-control"
              value={objet}
              onChange={(event) => setObjet(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>

            <textarea
              id="message"
              className="form-control"
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default ArtisanDetail;
