type SendTaskEmailPayload = {
  taskId: string;
  title: string;
  priority: string;
  category: string;
};

export async function sendTaskEmail(payload: SendTaskEmailPayload) {
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-task-email`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to send email");
  }

  return res.json();
}
