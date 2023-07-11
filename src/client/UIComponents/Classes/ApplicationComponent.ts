import { New } from "@rbxts/fusion";
import Signal from "@rbxts/signal"


const ApplicationComponentInit = (instance: GuiObject, index: Applications) => {
    const application = new ApplicationComponent(instance, index);
    application.Start();

    return application;
};

export enum Applications {
    None,
    Chrome,
    Amasan,
    RobloxStudio,
}

export { ApplicationComponentInit }

export default class ApplicationComponent {
    public static readonly OnChangedApplication = new Signal<(newIndex: Applications) => void>();
    private static StaticIndex = Applications.None;

    private index: Applications;
    private Instance: GuiObject;

    public static SwitchApplication(NewIndex: Applications){
        this.StaticIndex = NewIndex;
        this.OnChangedApplication.Fire(NewIndex);
    }

    constructor(instance: GuiObject, index: Applications) {
        this.Instance = instance;
        this.index = index;
    }

    public Hide() {
        this.Instance.Visible = false;
    }

    public Show() {
        this.Instance.Visible = true;
    }

    public Start() {
        ApplicationComponent.OnChangedApplication.Connect((NewIndex) => {
            if (NewIndex === this.index) {
                this.Show();
                return;
            }

            this.Hide();
        });

        this.Hide();
    }
}