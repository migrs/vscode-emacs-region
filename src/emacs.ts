'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('emacs.cutAllRight', cutAllRight));
    context.subscriptions.push(vscode.commands.registerCommand('emacs.scrollLineToCenter', scrollLineToCenter));
}

async function cutAllRight() {
    await vscode.commands.executeCommand("cursorEndSelect");
    await vscode.commands.executeCommand("editor.action.clipboardCutAction");
};

function scrollLineToCenter() {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const range = new vscode.Range(selection.start, selection.end);
    editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
};
