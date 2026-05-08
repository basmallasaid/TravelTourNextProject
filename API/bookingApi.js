const API_URL = process.env.NEXT_PUBLIC_APIURLBOOKINGS;


// GET ALL BOOKINGS
export const getBookings = async () => {
  const res = await fetch(API_URL);
  return res.json();
};


// CREATE BOOKING
export const createBooking = async (bookingData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  return res.json();
};


// DELETE BOOKING
export const deleteBooking = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};


// UPDATE BOOKING
export const updateBooking = async (id, updatedData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  return res.json();
};
// CREATE ENQUIRY
export const createEnquiry = async (enquiryData) => {
  // سنفترض أن هناك endpoint للاستفسارات في db.json يسمى enquiries
  const ENQUIRY_URL = API_URL.replace('bookings', 'enquiries'); 
  const res = await fetch(ENQUIRY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enquiryData),
  });

  return res.json();
};