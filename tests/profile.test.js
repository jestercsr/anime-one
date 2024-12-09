
const { default: PageProfile } = require('@/app/profile/page');
const { render, screen } = require('@testing-library/react');


describe('Page de profil', () => {
  it('doit rendre les informations du profil de l\'utilisateur', () => {
    render(<PageProfile />);

    expect(screen.getByText(/Nom d\'utilisateur/i)).toBeInTheDocument();
    expect(screen.getByText(/Adresse email/i)).toBeInTheDocument();
  });

  it('doit permettre de modifier les informations du profil', () => {
    render(<PageProfile />);

    const boutonModifier = screen.getByRole('button', { name: /Modifier/i });
    fireEvent.click(boutonModifier);
    expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
  });
});
