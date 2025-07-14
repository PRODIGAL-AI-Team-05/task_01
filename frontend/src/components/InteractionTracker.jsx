import { useEffect, useState } from 'react';

const InteractionTracker = () => {
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    const events = [];

    // Function to record interaction
    const recordEvent = (type, e) => {
      const event = {
        type,
        x: e.pageX,
        y: e.pageY,
        timestamp: new Date().toISOString(),
        pageURL: window.location.href,
        userAgent: navigator.userAgent,
      };
      events.push(event);
      setInteractionCount(prev => prev + 1);
    };

    // Send batch of interactions to backend
    const sendBatch = async () => {
      if (events.length === 0) return;
      const batch = [...events];
      events.length = 0;

      try {
        const response = await fetch('http://localhost:5000/api/log-interaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(batch),
        });

        if (response.ok) {
          console.log(`[Tracker] ✅ Sent ${batch.length} events`);
        } else {
          console.error(`[Tracker] ❌ Failed to send: ${response.status}`);
        }
      } catch (err) {
        console.error('[Tracker] ❌ Error:', err);
      }
    };

    // Set up event listeners
    const handleClick = (e) => recordEvent('click', e);
    const handleMouseMove = (e) => recordEvent('mousemove', e);

    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(sendBatch, 5000); // Every 5 seconds

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-white text-black px-3 py-1 rounded-full shadow-md text-sm z-50">
      Interactions: {interactionCount}
    </div>
  );
};

export default InteractionTracker;
