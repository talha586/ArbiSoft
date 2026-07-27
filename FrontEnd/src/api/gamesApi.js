const API_BASE = '/api';

export async function getGames(genre = '') {
  const url = genre
    ? `${API_BASE}/games/?genre=${encodeURIComponent(genre)}`
    : `${API_BASE}/games/`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch games');
  return res.json();
}

export async function getGenres() {
  const res = await fetch(`${API_BASE}/genres/`);
  if (!res.ok) throw new Error('Failed to fetch genres');
  return res.json();
}

export async function submitReview(payload) {
  const res = await fetch(`${API_BASE}/reviews/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to submit review');
  return res.json();
}
