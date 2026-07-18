import { useState, useEffect } from 'react';
import { fetchRepos } from '../api/github';

export const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    fetchRepos(username)
      .then(setRepos)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [username]);

  return { repos, loading, error };
};
