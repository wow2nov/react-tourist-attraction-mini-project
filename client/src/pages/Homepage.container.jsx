//เก็บ logic ต่างๆ
import HomepageComponent from "./Homepage.component";
import { useState, useEffect, useCallback } from "react";

const API_BASE = "http://localhost:4001";

const HompageContainer = () => {
  // Store all logic
  const [trips, setTrips] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleFetchTrips = useCallback(async () => {
    setError(null);

    const url = `${API_BASE}/trips?keywords=${input}`;
    // wina.trips({keywords:"ตราด"})

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const body = await response.json();
      const list = body.data ?? [];
      setTrips(list);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
      );
      setTrips([]);
    }
  }, [input]);

  useEffect(() => {
    const debounceMs = 400;
    const timer = setTimeout(() => {
      void handleFetchTrips();
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [handleFetchTrips]);

  return (
    <div>
      <HomepageComponent input={input} setInput={setInput} trips={trips}  />
    </div>
  );
};

export default HompageContainer;
