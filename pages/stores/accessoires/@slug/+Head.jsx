export default function Head(pageContext) {
  const {
    documentProps = {}
  } = pageContext;

  return (
    <>
      <title>{documentProps.title || "Anime ONE Store"}</title>

      <meta
        name="description"
        content={documentProps.description || ""}
      />
    </>
  );
}