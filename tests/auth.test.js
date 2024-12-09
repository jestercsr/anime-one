
const { default: PageAuth } = require('@/app/authentification/page');
const { render, screen, fireEvent } = require('@testing-library/react');


describe('Formulaire d\'authentification', () => {
  it('doit permettre la connexion avec des informations valides', () => {
    render(<PageAuth />);

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));

    expect(screen.getByText(/Profil/i)).toBeInTheDocument();
  });

  it('doit afficher un message d\'erreur si les informations sont incorrectes', () => {
    render(<PageAuth />);

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'wrongpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));

    expect(screen.getByText(/Email ou mot de passe incorrect/i)).toBeInTheDocument();
  });
});
