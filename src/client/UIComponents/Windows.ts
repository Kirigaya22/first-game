import { Controller, OnStart, OnInit, Modding } from "@flamework/core";
import { Children, Computed, New, OnEvent, Value } from "@rbxts/fusion";
import { CollectionService, Players } from "@rbxts/services";
import ApplicationButton from "client/UIComponents/Windows/ApplicationButtonComponent";
import AmasanApplication from "client/UIComponents/Windows/Applications/AmasanApplication";
import ChromeApplication from "client/UIComponents/Windows/Applications/ChromeApplication";
import RobloxStudioApplication from "client/UIComponents/Windows/Applications/RobloxStudioApplication";
import Button from "client/UIComponents/Windows/ButtonComponent";
import { Applications } from "client/UIComponents/Classes/ApplicationComponent";
import { Events } from "client/network";
import UIComponent, { UIComponentInit, UIComponents } from "./Classes/UIComponent";


const StateComputer = Value(false);
const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const Windows = () => { 
    const index = UIComponents.Windows;
    const windows = New("ScreenGui")({
        Parent: PlayerGui,
        IgnoreGuiInset: true,
        Enabled: Computed(() => StateComputer.get()),

        [Children]: [
            ChromeApplication(),
            AmasanApplication(),
            RobloxStudioApplication(),
                
            New("Frame")({
            Size: UDim2.fromScale(1, 1),

                [Children]: [
                    New("ImageLabel")({
                        Size: UDim2.fromScale(1, 1),
                        Image: "rbxassetid://13828481924",

                        [Children]: [
                                ApplicationButton({
                                    Name: "Chrome",
                                    LayoutOrder: 1,
                                    Position: UDim2.fromScale(0.09, 0.104),                                    
                                    Size: UDim2.fromScale(0.075, 0.091),
                                    ZIndex: 1,
                                    Image: "http://www.roblox.com/asset/?id=13681516876",
                                    BackgroundTransparency: 1,
                                    ApplicationIndex: Applications.Chrome,
                                }),

                            ApplicationButton({
                                Name: "Amasan",
                                LayoutOrder: 1,
                                Position: UDim2.fromScale(0.011, 0.104),
                                Size: UDim2.fromScale(0.075, 0.091),
                                ZIndex: 1,
                                Image: "rbxassetid://13828705088",
                                BackgroundTransparency: 1,
                                ApplicationIndex: Applications.Amasan,
                            }),

                            New("ImageButton")({
                                Position: UDim2.fromScale(0.011, 0.909),
                                Size: UDim2.fromScale(0.063, 0.068),
                                Image: "rbxassetid://13828519859",
                                BackgroundTransparency: 1,
                                    
                                [OnEvent("Activated")]: () => {
                                        UIComponent.Disable(index)
                                }
                            }),

                            ApplicationButton({
                                Name: "Roblox Studio",
                                LayoutOrder: 1,
                                Position: UDim2.fromScale(0.012, 0.266),
                                Size: UDim2.fromScale(0.083, 0.091),
                                ZIndex: 1,
                                Image: "rbxassetid://13828869977",
                                BackgroundTransparency: 1,
                                ApplicationIndex: Applications.RobloxStudio,
                            }),
                        ]
                    })
                ]
            })
        ]
    });

    UIComponentInit(windows, index)

    return windows;
}

export default Windows;