import { ReceiverModel } from '../models/receivers';
import { ReceiverParser } from '../parsers/receivers';

const receiversService = {
  list() {
    return fetch(`${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers`).then(
      (res) => res.json().then(ReceiverParser.list),
    );
  },
  getById(receiverId) {
    return fetch(
      `${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers/${receiverId}`,
    )
      .then((res) => res.json())
      .then(ReceiverParser.single);
  },
  createReceiver(receiver) {
    return fetch(`${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ReceiverModel.single(receiver)),
    }).then((res) => res.json());
  },
  editReceiver(receiver, receiverId) {
    return fetch(
      `${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers/${receiverId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ReceiverModel.single(receiver)),
      },
    ).then((res) => res.json());
  },
  deleteReceiver(receiverId) {
    return fetch(
      `${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers/${receiverId}`,
      {
        method: 'DELETE',
      },
    ).then((res) => res.json());
  },
};

export default receiversService;
