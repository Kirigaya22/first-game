import { OnStart } from "@flamework/core";
import { Children, New, OnEvent, Out, Tween } from "@rbxts/fusion";
import { Events } from "client/network";


interface ButtonProperties {
    Name: string;
    LayoutOrder?: number;
    Position: UDim2;
    Size: UDim2;
    ZIndex?: number;
    Image: string;
    BackgroundTransparency: number;
    Text: string;
    Activated: (element: ImageButton) => void;
}

const Button = (props: ButtonProperties) => {
    const direction = Enum.EasingDirection.InOut;
    const style = Enum.EasingStyle.Quad;
    const time = 0.1;

    const element =  New("ImageButton")({
        Name: props.Name,
        LayoutOrder: props.LayoutOrder,
        Position: props.Position,
        Size: props.Size,
        ZIndex: props.ZIndex,
        Image: props.Image,
        BackgroundTransparency: props.BackgroundTransparency,

        [Children]: [
            New("UICorner")({
                CornerRadius: new UDim(0, 4)
            }),

            New("UIPadding")({
                PaddingTop: new UDim(0, 6),
                PaddingBottom: new UDim(0, 6),
                PaddingLeft: new UDim(0, 6),
                PaddingRight: new UDim(0, 6)
            }),

            New("TextLabel")({
                Position: UDim2.fromScale(-0.017, 0.883),
                Size: UDim2.fromScale(1.067, 0.417),
                BackgroundTransparency: 1,
                Font: Enum.Font.FredokaOne,
                TextScaled: true,
                Text: props.Text,
            }),

            
        ],

        [OnEvent("MouseEnter")]: () => {
            element.TweenSizeAndPosition(props.Size.add(UDim2.fromScale(0.025, 0.025)), props.Position.add(UDim2.fromScale(-0.0125, -0.0125)), direction, style, time);
        },

        [OnEvent("MouseLeave")]: () => {
            element.TweenSizeAndPosition(props.Size, props.Position, direction, style, time);
        },

        [OnEvent("Activated")]: () => props.Activated(element),
    });

    return element;
} 

export default Button;