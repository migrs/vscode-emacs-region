'use strict';

import * as vscode from 'vscode';
import * as region from './emacs-region'
import * as vim from './vim'
import * as emacs from './emacs'

export function activate(context: vscode.ExtensionContext) {
    region.activate(context);
    emacs.activate(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
    region.deactivate();
}
