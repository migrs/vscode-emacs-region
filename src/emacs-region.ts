// Copyright (c) 2016 Nisheet Jain
// Released under the MIT license
// https://github.com/nisheetjain/vscode-emacs/blob/master/LICENSE.txt

// Copyright (c) 2016 Tomohiro Yanagi
// Released under the MIT license
// https://github.com/t-yng/vscode-emacs-region/blob/master/LICENSE.txt

'use strict';

import * as vscode from 'vscode';
import * as vim from './vim'

enum RegionMode {
    None,
    RegionMode,
    ColumnRegionMode
}

export function activate(context: vscode.ExtensionContext) {
    setRegionMode(RegionMode.None);

    context.subscriptions.push(vscode.commands.registerCommand('emacs.startRegionMode', startRegionMode));
    context.subscriptions.push(vscode.commands.registerCommand('emacs.startColumnRegionMode', startColumnRegionMode));
    context.subscriptions.push(vscode.commands.registerCommand('emacs.exitRegionMode', exitRegionMode));

    const selectionActions: string[] = ["action.clipboardCopyAction", "action.clipboardPasteAction"];
    selectionActions.forEach((selectionAction) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + selectionAction, () => {
            vscode.commands.executeCommand("editor." + selectionAction).then(exitRegionMode);
        }));
    });

    const deletionActions: string[] = ["deleteLeft", "deleteRight", "deleteWordLeft", "deleteWordRight"];
    deletionActions.forEach((deletionAction) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + deletionAction, () => {
            vscode.commands.executeCommand(deletionAction).then(exitRegionMode);
        }));
    });

    const disableVimActions: string[] = ["action.insertLineBefore", "action.insertLineAfter", "action.clipboardCutAction"];
    disableVimActions.forEach((insertLineAction) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + insertLineAction, () => {
            vscode.commands.executeCommand("editor." + insertLineAction).then(exitRegionMode).then(vim.disableVim);
        }));
    });
}

function startRegionMode() {
    setRegionMode(RegionMode.RegionMode).then(removeSelection);
}

async function startColumnRegionMode() {
    await vim.disableVim()
    setRegionMode(RegionMode.ColumnRegionMode).then(removeSelection);
}

function exitRegionMode() {
    setRegionMode(RegionMode.None).then(removeSelection);
}

async function setRegionMode(value: RegionMode) {
    await vscode.commands.executeCommand('setContext', 'inRegionMode', value != RegionMode.None)
    await vscode.commands.executeCommand('setContext', 'inColumnRegionMode', value == RegionMode.ColumnRegionMode);
}

function removeSelection() {
    const pos: vscode.Position = vscode.window.activeTextEditor.selection.active;
    vscode.window.activeTextEditor.selection = new vscode.Selection(pos, pos);
}

export function deactivate() {
    setRegionMode(RegionMode.None);
}
