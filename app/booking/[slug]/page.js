import BookingForm from "@/components/BookingForm";
async function getTourData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}?slug=${slug}`, {
    cache: "no-store", 
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export default async function BookingPage({ params }) {
  const { slug } = await params;
  const tour = await getTourData(slug);
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-red-500 mb-4">Tour Not Found</h1>
          <p className="text-gray-500">The tour you are trying to book does not exist.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <BookingForm tour={tour} />
    </div>
  );
}