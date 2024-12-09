
const { default: Home } = require('@/app/page');
const { render, screen, fireEvent } = require('@testing-library/react');

describe('Page d\'accueil', () => {
  it('doit rendre les éléments principaux', () => {
    render(<Home />);

    expect(screen.getByText(/Bienvenue sur l\'accueil/i)).toBeInTheDocument();
    
    const lien = screen.getByRole('link', { name: /Voir plus/i });
    fireEvent.click(lien);
    expect(window.location.href).toContain('/authentification');
  });
});
