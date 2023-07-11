import { Children, New } from "@rbxts/fusion";
import { ApplicationComponentInit, Applications } from "../../Classes/ApplicationComponent";

const AmasanApplication = () => {
    const Amasan = New("ImageLabel")({
        Name: "Amasan",
        Size: UDim2.fromScale(1, 1),
        Image: "rbxassetid://14027340803",
        ZIndex: 2,
    })


    ApplicationComponentInit(Amasan, Applications.Amasan);

    return Amasan;
}

export default AmasanApplication;