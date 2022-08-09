import { useState, useEffect } from "react";

export default function PylonLatency() {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const websocketClient = new WebSocket("ws://localhost:55455");
    websocketClient.onerror = (err) =>
      console.log("Error while trying to connect to Pylon", err);
    websocketClient.onclose = () => console.log("Websocket to Pylon closed.");
    websocketClient.onopen = () => console.log("connected!");

    websocketClient.onmessage = (message) => {
      setLatency(Date.now() - parseInt(message.data));
    };
  }, []);

  return <>{latency}ms</>;
}
