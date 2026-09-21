function ArtisanCard({ artisan }) {
  const note = Number(artisan.note);

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{artisan.nom}</h3>

        <p className="mb-2">
          <strong>Note :</strong> {"★".repeat(Math.round(note))}
          {"☆".repeat(5 - Math.round(note))} {note}/5
        </p>

        <p className="mb-2">
          <strong>Spécialité :</strong> {artisan.specialite}
        </p>

        <p className="mb-3">
          <strong>Localisation :</strong> {artisan.ville} ({artisan.code_postal}
          )
        </p>

        <a href={`/artisans/${artisan.id}`} className="btn btn-outline-primary">
          Voir la fiche
        </a>
      </div>
    </div>
  );
}

export default ArtisanCard;
