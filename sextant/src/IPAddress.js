import { useEffect, useState } from "react";

export default function IPAddress({ type = "ipv4" }) {
  const [ipAddress, setipAddress] = useState([]);

  useEffect(() => {
    async function fetchIPV4Address() {
      let response;
      try {
        response = await fetch("https://api.ipify.org");
      } catch (err) {
        console.error(err);
      }
      if (response.status !== 200) return console.error("failed");

      let ip = await response.text();
      setipAddress(ip);
    }

    async function fetchIPV6Address() {
      let response;
      try {
        response = await fetch("https://api.ipify.org");
      } catch (err) {
        console.error(err);
      }
      if (response.status !== 200) return console.error("failed");

      let ip = await response.text();
      if (!ip.includes("::")) {
        setipAddress("N/A");
      } else {
        setipAddress(ip);
      }
    }

    if (type === "ipv6") {
      fetchIPV6Address();
    } else {
      fetchIPV4Address();
    }
  }, []);
  return <>{ipAddress}</>;
}
