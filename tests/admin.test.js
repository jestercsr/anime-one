const { default: PageAdmin } = require('@/app/admin/page');
const { render, screen, fireEvent } = require('@testing-library/react');


describe('Page d\'administration', () => {
  it('doit permettre d\'ajouter un nouveau contenu', () => {
    render(<PageAdmin />);

    fireEvent.change(screen.getByLabelText(/Titre/i), { target: { value: 'Nouveau Manga' } });
    fireEvent.click(screen.getByRole('button', { name: /Ajouter/i }));
    expect(screen.getByText(/Nouveau Manga/i)).toBeInTheDocument();
  });

  it('doit permettre de supprimer un contenu', () => {
    render(<PageAdmin />);

    fireEvent.click(screen.getByRole('button', { name: /Supprimer Manga/i }));
    expect(screen.queryByText(/Manga à supprimer/i)).toBeNull();
  });
});
