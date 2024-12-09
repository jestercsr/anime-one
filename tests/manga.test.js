
const { default: MangaListe } = require('@/app/manga/[id]/ui/MangaListe');
const { default: ListeAllManga } = require('@/app/manga/ui/ListeAllManga');
const { render, screen } = require('@testing-library/react');


describe('Page des mangas', () => {
  it('doit rendre la liste des mangas', () => {
    render(<ListeAllManga />);

    expect(screen.getByText(/Manga 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Manga 2/i)).toBeInTheDocument();
  });

  it('doit permettre de naviguer vers la page de détails d\'un manga', () => {
    render(<MangaListe />);

    const lien = screen.getByRole('link', { name: /Détails du manga 1/i });
    fireEvent.click(lien);
    expect(window.location.href).toContain('/manga/1');
  });
});
