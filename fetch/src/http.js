export async function fetchAvailablePlaces() {
  const res = await fetch("http://localhost:3000/places");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch places!");
  }

  return resData.places;
}
// PUT
export async function updateUserPlaces(places) {
  const url = `http://localhost:3000/user-places`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();

  if (!resData.ok) {
    throw new Error("Failed update user-data.");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const res = await fetch("http://localhost:3000/user-places");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch user places!");
  }

  return resData.places;
}
