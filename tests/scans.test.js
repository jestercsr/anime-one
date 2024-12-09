
const { default: ListeScans } = require('@/app/scans/ui/ListeScans');
const { render, screen } = require('@testing-library/react');


describe('Page des scans', () => {
  it('doit rendre la liste des scans', () => {
    render(<ListeScans />);

    expect(screen.getByText(/Scan 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Scan 2/i)).toBeInTheDocument();
  });
});
