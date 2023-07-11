import { Children, New } from "@rbxts/fusion";
import { ApplicationComponentInit, Applications } from "../../Classes/ApplicationComponent";

const RobloxStudioApplication = () => {
    const RobloxStudio = New("ImageLabel")({
        Name: "RobloxStudio",
        Size: UDim2.fromScale(1, 1),
        Image: "rbxassetid://14027340401",
        ZIndex: 2,
    })


    ApplicationComponentInit(RobloxStudio, Applications.RobloxStudio);

    return RobloxStudio;
}

export default RobloxStudioApplication;