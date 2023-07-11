import { Players } from "@rbxts/services";
import { Children, Computed, New, Value } from "@rbxts/fusion";
import { Controller } from "@flamework/core";
import { UIComponentInit, UIComponents } from "./Classes/UIComponent";


const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const StatesState = Value(true);

const PlayerStats = () => { 
    const stateGui = New("ScreenGui")({
        Parent: PlayerGui,
        Enabled: Computed(() => StatesState.get()),
        Name: "Statsclone",

        [Children]: [
            New("Frame")({
                Name: "BG",
                Position: UDim2.fromScale(0.17, 0.175),
                Size: UDim2.fromScale(0.617, 0.629),

                [Children]: [
                    New("UICorner")({
                        CornerRadius: new UDim(0.2, 0),
                    }),

                    New("UIGradient")({
                        Color: new ColorSequence(Color3.fromRGB(255, 255, 255), Color3.fromRGB(89, 89, 89)),
                    }),

                    New("UIStroke")({
                        Thickness: 3.4,
                    }),
                ]
            })
        ],
    });

    UIComponentInit(stateGui, UIComponents.Stats);

    return stateGui;
}

export default PlayerStats;
