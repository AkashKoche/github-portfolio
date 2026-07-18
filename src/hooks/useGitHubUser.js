import { useState, useEffect } from 'react';
import { fetchUser } from '../api/github';

export const useGitHubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    fetchUser(username)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [username]);

  return { user, loading, error };
};
