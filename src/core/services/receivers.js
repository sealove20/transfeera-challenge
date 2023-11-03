const receiversService = {
  list() {
    return fetch(`${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers`).then(
      (res) => res.json(),
    );
  },
  getById(receiverId) {
    return fetch(
      `${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers/${receiverId}`,
    ).then((res) => res.json());
  },
  createReceiver(receiver) {
    return fetch(`${import.meta.env.VITE_TRANSFEERA_API_URL}/receivers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receiver),
    }).then((res) => res.json());
  },
};

export default receiversService;
