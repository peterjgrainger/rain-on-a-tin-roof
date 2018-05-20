export class SlotType {
    public type: string;
    public samples: string[];
    constructor(type: string, samples: string[]= []) {
        this.type = type;
        this.samples = samples;
    }

    /**
     * Return these skills
     */
    public getSkillModel() {
        return {
                name: this.type,
                values: this.samples.map((sample) => {
                    return {
                        name: {
                            value: sample,
                        },
                    };
                }),
            };
    }
}
