import { Networking } from "@flamework/networking";

interface ServerEvents {}

interface ClientEvents {
    Add(amount: number): void;
}

interface ServerFunctions {}

interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
