import { useEffect, useReducer, useState } from "react";
import {
  defaultSocketContextState,
  SocketContextProvider,
  SocketReducer,
} from "./context";
import { useSocket } from "@/app/hooks/useSocket";

export default function SocketContextComponent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [SocketState, SocketDispatch] = useReducer(
    SocketReducer,
    defaultSocketContextState,
  );
  const [loading, setLoading] = useState(false);

  const socket = useSocket(`${process.env.NEXT_PUBLIC_API_URL}/asdfhljk`, {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
  });

  useEffect(() => {
    socket.connect();

    SocketDispatch({ type: "update_socket", payload: socket });

    StartListeners();

    SendHandshake();
  }, []);

  const StartListeners = () => {
    socket.on("user_connected", (users: string) => {
      console.log("User connected", users);
    });

    socket.io.on("reconnect", (attempt) => {
      console.log("Reconnected on attempt:", attempt);
    });

    socket.io.on("reconnect_attempt", (attempt) => {
      console.log("Reconnection attempt", attempt);
    });

    socket.io.on("reconnect_failed", () => {
      console.log("Reconnection failed");
    });
  };

  const SendHandshake = () => {
    socket.emit("handshake", (uid: string, messages: string[]) => {
      SocketDispatch({ type: "update_uid", payload: uid });
      SocketDispatch({ type: "update_messages", payload: messages });
      setLoading(false);
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
}
