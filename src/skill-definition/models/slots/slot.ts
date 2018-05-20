import { SlotType } from "./slot-type";

export class Slot {
    public name: string;
    public slotType: SlotType;
    constructor(name: string, slotType: SlotType) {
        this.name = name;
        this.slotType = slotType;
    }

    public getServerSchema(): {} {
        return this[this.name] = this.slotType.type;
    }

    public getSlotType(): {name: string, values: Array<{name: {value: string}}>} {
        return {
            name: this.slotType.type,
            values: this.slotType.samples.map((sample) => {
                return {
                    name: {
                        value: sample,
                    },
                };
            }),
        };
    }

    public getInteractionDefinition() {
        return {
            name: this.name,
            type: this.slotType.type,
        };
    }
}
