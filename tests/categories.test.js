
const { default: PageCategories } = require('@/app/categories/page');
const { render, screen, fireEvent } = require('@testing-library/react');


describe('Gestion des catégories', () => {
  it('doit permettre d\'ajouter une catégorie', () => {
    render(<PageCategories />);

    fireEvent.change(screen.getByLabelText(/Nom de la catégorie/i), { target: { value: 'Nouvelle Catégorie' } });
    fireEvent.click(screen.getByRole('button', { name: /Ajouter/i }));
    expect(screen.getByText(/Nouvelle Catégorie/i)).toBeInTheDocument();
  });

  it('doit permettre de supprimer une catégorie', () => {
    render(<PageCategories />);

  });
});
