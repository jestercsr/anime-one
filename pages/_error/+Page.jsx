export default function Page({ is404 }) {
  return (
    <div>
      <h1>{is404 ? "404" : "Une erreur est survenue"}</h1>
    </div>
  );
}
