import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

@Component({})
export class PlayerComponenet extends BaseComponent implements OnStart {
    private Experience: number = 0;
    private Teamwork: number = 0;
    private Creativity: number = 0;
    private Skills: number = 0;


    public AddExperience(amount: number) {

    }

    onStart() {
        
    }
}