import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { createRoot, Root } from 'react-dom/client';
import Control from './src/Control';
import * as React from "react";
import { Props } from "./types/Props";
export class SpeechRecognition implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    _rootControl: Root;
    _container: HTMLDivElement;
    _notifyOutputChanged: () => void;
    _transcript: string = "";
    _isRender = false;
    constructor() {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;
    }


    public updateView(context: ComponentFramework.Context<IInputs>): void {
        if (this._isRender) return;
        this.renderControl();
    }
    renderControl() {
        this._isRender = true;
        this._rootControl = createRoot(this._container);
        const props: Props = {} as Props;
        props.callback = (transcript: string) => {
            this._transcript = transcript;
            this._notifyOutputChanged();
        };
        this._rootControl.render(React.createElement(Control, props));
    }


    public getOutputs(): IOutputs {
        return {
            text: this._transcript
        };
    }


    public destroy(): void {

    }
}
