import { Players } from "@rbxts/services";
import { Children, New } from "@rbxts/fusion";
import { UIComponentInit, UIComponents } from "./Classes/UIComponent";


const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const PlayerStats = () => { 
    const stateGui = New("ScreenGui")({
        Parent: PlayerGui,
        Enabled: false,
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
