import { Slot } from "../../models/slots/slot";
import { IntentDefinition } from "./intent-definition";

export abstract class Intent {
    public utterances: string[] = [];
    public slots: Slot[] = [];

    public schema() {
        return {
            slots: this.slots.reduce((acc, value) => {
                acc[value.name] = value.slotType.type;
                return acc;
            }, {}),
            utterances: this.utterances,
        };
    }
}
