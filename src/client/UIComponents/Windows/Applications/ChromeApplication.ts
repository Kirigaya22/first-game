import { Children, New } from "@rbxts/fusion";
import { ApplicationComponentInit, Applications } from "../../Classes/ApplicationComponent";

const ChromeApplication = () => {
    const Chrome = New("ImageLabel") ({
        Name: "Chrome",
        Size: UDim2.fromScale(1, 1),
        Image: "rbxassetid://14021157665",
        ZIndex: 2,
    })


    ApplicationComponentInit(Chrome, Applications.Chrome);

    return Chrome;
}


export default ChromeApplication;