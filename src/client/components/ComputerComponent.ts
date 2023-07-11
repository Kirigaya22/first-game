import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import UIComponent, { UIComponents } from "client/UIComponents/Classes/UIComponent";


interface ButtonTurnOn extends MeshPart{
    TurnOn: ClickDetector
}


@Component({
    tag: "Computer"
})

export default class ComputerComponent extends BaseComponent<{}, ButtonTurnOn> implements OnStart {
    onStart() {
        this.instance.TurnOn.MouseClick.Connect((player: Player) => {
            UIComponent.Enable(UIComponents.Windows);
        })
    }
}

