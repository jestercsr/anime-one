
const { default: ListeSeries } = require('@/app/series/ui/ListeSerie');
const { render, screen } = require('@testing-library/react');


describe('Page des séries', () => {
  it('doit rendre la liste des séries', () => {
    render(<ListeSeries />);

    // Tester que les titres des séries sont rendus
    expect(screen.getByText(/Série 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Série 2/i)).toBeInTheDocument();
  });

  it('doit permettre de naviguer vers la page de détails d\'une série', () => {
    render(<ListeSeries />);

    // Tester le lien de navigation vers les détails
    const lien = screen.getByRole('link', { name: /Détails de la série 1/i });
    fireEvent.click(lien);
    expect(window.location.href).toContain('/manga/1/series');
  });
});
