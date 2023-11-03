import useReceivers from '../Hooks/useListReceivers';

export const ReceiverList = () => {
  const { receivers } = useReceivers();
  return <h1>Receivers</h1>;
};
