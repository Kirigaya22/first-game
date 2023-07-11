import Signal from "@rbxts/signal";

const UIComponentInit = (instance: ScreenGui, index: UIComponents) => {
    return new UIComponent(instance, index).Start();
}

export { UIComponentInit };

export enum UIComponents {
    Windows,
    Stats,
}

export default class UIComponent {
    private static readonly OnEnabled = new Signal<(index: UIComponents) => void>();
    private static readonly OnDisabled = new Signal<(index: UIComponents) => void>();

    private instance: ScreenGui;
    private index: UIComponents;

    public static Enable(index: UIComponents) {
        this.OnEnabled.Fire(index);
    } 

    public static Disable(index: UIComponents) {
        this.OnDisabled.Fire(index);
    }

    constructor(instance: ScreenGui, index: UIComponents) {
        this.instance = instance;
        this.index = index;
    }

    public Start() {
        UIComponent.OnEnabled.Connect((index: UIComponents) => {
            if (index === this.index) {
                this.instance.Enabled = true;
            }
        });

        UIComponent.OnDisabled.Connect((index: UIComponents) => {
            if (index === this.index) {
                this.instance.Enabled = false;
            }
        });

        return this;
    }
}