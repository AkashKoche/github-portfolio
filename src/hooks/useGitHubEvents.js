import { useState, useEffect, useCallback } from 'react';
import { fetchEvents } from '../api/github';

const POLL_INTERVAL = 30000; // 30 seconds

export const useGitHubEvents = (username) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEvents = useCallback(async () => {
    if (!username) return;
    try {
      const data = await fetchEvents(username);
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    loadEvents();
    const interval = setInterval(loadEvents, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [loadEvents]);

  return { events, loading, error };
};
