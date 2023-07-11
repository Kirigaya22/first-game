import { Controller, OnInit, OnStart } from "@flamework/core";
import Windows from "../UIComponents/Windows";
import PlayerStats from "client/UIComponents/Stats";

@Controller({})
export class UIController implements OnStart {
    onStart() {
        PlayerStats();
        Windows();
    }
}