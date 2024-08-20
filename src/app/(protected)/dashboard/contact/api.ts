export const createTopic = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-topic`);
  const data = await res.json();
  return data;
};

export const sendMessage = async ({
  topicId,
  message,
}: {
  topicId: number;
  message: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-message`, {
    method: "POST",
    body: JSON.stringify({ message: "hello" }),
  });
  const data = await res.json();
  return data;
};
