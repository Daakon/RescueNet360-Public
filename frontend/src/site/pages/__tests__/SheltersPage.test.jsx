import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SheltersPage } from '../SheltersPage';
import * as api from '../../../utils/api';

vi.mock('../../../utils/api', () => ({
  submitPilotApplication: vi.fn(),
}));

describe('SheltersPage Pilot Application Flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <HelmetProvider>
        <MemoryRouter>
          <SheltersPage />
        </MemoryRouter>
      </HelmetProvider>
    );
  };

  it('renders the pilot application form properly', () => {
    renderComponent();
    expect(screen.getByText('Apply for Pilot Access')).toBeInTheDocument();
    expect(screen.getByLabelText(/Organization Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Organization Type \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tell us about your current setup or biggest challenge \*/i)).toBeInTheDocument();
  });

  it('submits the form successfully and displays confirmation', async () => {
    api.submitPilotApplication.mockResolvedValueOnce({ message: 'Success' });
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Organization Name \*/i), { target: { value: 'Hope Rescue' } });
    fireEvent.change(screen.getByLabelText(/Contact Name \*/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address \*/i), { target: { value: 'jane@hoperescue.org' } });
    fireEvent.change(screen.getByLabelText(/Organization Type \*/i), { target: { value: 'rescue' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your current setup or biggest challenge \*/i), { target: { value: 'We use spreadsheets and need better tracking.' } });

    fireEvent.click(screen.getByRole('button', { name: /Apply to Be a Pilot Partner/i }));

    expect(screen.getByRole('button', { name: /Submitting Application/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Application Received!')).toBeInTheDocument();
    });

    expect(api.submitPilotApplication).toHaveBeenCalledWith({
      orgName: 'Hope Rescue',
      contactName: 'Jane Doe',
      email: 'jane@hoperescue.org',
      orgType: 'rescue',
      challenge: 'We use spreadsheets and need better tracking.',
      source: 'pilot-application',
    });
  });

  it('displays error message if submission fails', async () => {
    api.submitPilotApplication.mockRejectedValueOnce(new Error('Network error'));
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Organization Name \*/i), { target: { value: 'Hope Rescue' } });
    fireEvent.change(screen.getByLabelText(/Contact Name \*/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address \*/i), { target: { value: 'jane@hoperescue.org' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your current setup or biggest challenge \*/i), { target: { value: 'Test challenge' } });

    fireEvent.click(screen.getByRole('button', { name: /Apply to Be a Pilot Partner/i }));

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });
});
