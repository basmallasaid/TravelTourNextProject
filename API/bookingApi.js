const API_URL = "/api/bookings"; 

export const getBookings = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createBooking = async (bookingData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  if (!res.ok) throw new Error("Failed to create");
  return res.json();
};

export const deleteBooking = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updateBooking = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};