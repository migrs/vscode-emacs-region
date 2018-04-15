'use strict';

import * as vscode from 'vscode';

export async function enableVim() {
    if (vscode.workspace.getConfiguration('vim').get('disableExtension')) {
        await vscode.commands.executeCommand('toggleVim');
    }
}

export async function disableVim() {
    if (!vscode.workspace.getConfiguration('vim').get('disableExtension')) {
        await vscode.commands.executeCommand('toggleVim');
    }
}
