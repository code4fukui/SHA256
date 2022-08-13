const digest = async (data) => {
  if (typeof data == "string") {
    data = new TextEncoder().encode(data);
  }
  return new Uint8Array(await crypto.subtle.digest('SHA-256', data));
};

export const SHA256 = {
  digest,
};
