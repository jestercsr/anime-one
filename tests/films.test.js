
const { default: ListeFilms } = require('@/app/films/ui/ListeFilms');
const { render, screen } = require('@testing-library/react');


describe('Page des films', () => {
  it('doit rendre la liste des films', () => {
    render(<ListeFilms />);

    expect(screen.getByText(/Film 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Film 2/i)).toBeInTheDocument();
  });

  it('doit permettre de naviguer vers la page de détails d\'un film', () => {
    render(<ListeFilms />);

    // Tester le lien de navigation vers les détails
    const lien = screen.getByRole('link', { name: /Détails du film 1/i });
    fireEvent.click(lien);
    expect(window.location.href).toContain('/manga/1/films');
  });
});
