import { Components } from "@flamework/components";
import { Service, OnStart, Dependency } from "@flamework/core";
import { Players } from "@rbxts/services";
import { PlayerComponenet } from "server/components/PlayerComponenet";

const components = Dependency<Components>();

@Service({})
export class PlayerService implements OnStart {
    onStart() {
        Players.PlayerAdded.Connect((player) => {
            components.addComponent<PlayerComponenet>(player);
        });
    }
}