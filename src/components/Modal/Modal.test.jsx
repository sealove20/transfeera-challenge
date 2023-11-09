import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '../../../tests/test-utils';
import { Modal } from './Modal';
import { vi, expect } from 'vitest';

describe('Modal', () => {
  const handleClose = vi.fn();

  it('test if modal shows the children and a close button', () => {
    const isOpen = true;
    render(
      <Modal isVisible={isOpen} onCloseClick={handleClose} title={'Matheus'}>
        <div>test</div>
      </Modal>,
    );

    const modalChildElement = screen.getByText(/test/i);
    expect(modalChildElement).toBeTruthy();

    const closeButton = screen.getByTestId('close-modal');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it('check if modal is open after click on open button', async () => {
    let isOpen = false;

    render(
      <>
        <button>Open Modal</button>
        <Modal isVisible={isOpen} onCloseClick={handleClose} title={'Matheus'}>
          <div>test</div>
        </Modal>
        ,
      </>,
    );

    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();

    const button = screen.getByText('Open Modal');
    fireEvent.click(button);
    await waitFor(() => expect(modal));
  });
});
