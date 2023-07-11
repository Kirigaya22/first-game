import Button from "./ButtonComponent";
import ApplicationComponent, { Applications } from "../Classes/ApplicationComponent";


export interface ApplicationButtonComponentProperties {
    Name: string;
    LayoutOrder?: number;
    Position: UDim2;
    Size: UDim2;
    ZIndex?: number;
    Image: string;
    BackgroundTransparency: number;
    ApplicationIndex: Applications;
}

const ApplicationButton = (props: ApplicationButtonComponentProperties) => {
    return Button({
        Name: props.Name,
        LayoutOrder: props.LayoutOrder,
        Position: props.Position,
        Size: props.Size,
        ZIndex: props.ZIndex,
        Image: props.Image,
        BackgroundTransparency: props.BackgroundTransparency,
        Text: props.Name,
        Activated: () => {
            ApplicationComponent.SwitchApplication(props.ApplicationIndex);
        },
    })
}

export default ApplicationButton;