import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>

      <h2 className="mb-3">Page non trouvée</h2>

      <p className="mb-4">
        La page que vous recherchez n'existe pas ou n'est plus disponible.
      </p>

      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
