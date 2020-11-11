import { GwTypedMap } from "../../types/gwTypes";
/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export declare abstract class GwRegisteredSystem {
    static readonly registeredSystems: GwTypedMap<{
        getSystemName(): string;
    }>;
    constructor();
    abstract getSystemName(): string;
    protected availableToGlobal(): boolean;
    /**
     * Singleton objects passed to this method will appear on the gw.globals object, under the name given by
     * getSystemName(). More importantly such objects will be available to inline methods given in attributes
     * such as data-gw-click="gwMouse.enter". To make "gwMouse.enter" work the class GwMouse builds a singleton
     * whose getSystemName method returns "gwMouse", and which also has a method called "enter". Then it calls
     * this register method, with the singleton as its argument, to make the singleton available.
     *
     * Registration is automatically handled if you create a TypeScript class and extend GwRegisteredSystem, because
     * the GwRegisteredSystem constructor will call this method. But register can be called explicitly to register
     * any JavaScript object that has a getSystemName method.
     *
     * @param {{ getSystemName (): string }} system the system to be registered
     */
    static register(system: {
        getSystemName(): string;
    }): void;
}
