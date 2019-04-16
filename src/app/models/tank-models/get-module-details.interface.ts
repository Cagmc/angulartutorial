export class GetModuleDetails {
    constructor(moduleId: number, moduleType: string) {
        this.moduleId = moduleId;
        this.moduleType = moduleType;
    }

    moduleId: number;
    moduleType: string;
}
