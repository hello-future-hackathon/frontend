import { Socket } from "socket.io-client";
import { createContext } from "react";

export interface ISocketContextState {
  socket: Socket | undefined;
  uid: string;
  messages: string[];
}

export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
  uid: "",
  messages: [],
};

export type TSocketContextActions =
  | "update_socket"
  | "update_uid"
  | "update_messages"
  | "remove_messages";

export type TSocketContextPayload = string | string[] | Socket;

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (
  state: ISocketContextState,
  action: ISocketContextActions,
) => {
  console.log(`Message Received: ${action.type} - Payload: ${action.payload}`);

  switch (action.type) {
    case "update_socket":
      return { ...state, socket: action.payload as Socket };
    case "update_uid":
      return { ...state, uid: action.payload as string };
    case "update_messages":
      return { ...state, users: action.payload as string[] };
    case "remove_messages":
      return {
        ...state,
        users: state.messages.filter(
          (uid) => uid != (action.payload as string),
        ),
      };
  }
};

export interface ISocketContextProps {
  SocketState: ISocketContextState;
  SocketDispatch: React.Dispatch<TSocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
  SocketState: defaultSocketContextState,
  SocketDispatch: () => {},
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;
