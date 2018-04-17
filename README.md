<h2 align="center"><img src="https://raw.githubusercontent.com/migrs/vscode-vimacs/master/images/icon.png" height="128"><br>VSCode Vimacs</h2>
<p align="center"><strong>Emacs keybindings for VSCodeVim</strong></p>

## Concepts

- Mainly using [VSCodeVim](https://github.com/VSCodeVim/Vim), you can also use Emacs like keybindings in Vim insert mode (or vim disabled)
- Avoid keybindings conflicts with other extensions as much as possible
- Vim insert mode and Vim disabled status are almost the same
- Supports Emacs region select keybindings (includes column region)
- Since Vim insert mode and mlti-cursors are incompatible, Vim disabled when column region mode.
- Respect the default keybindings of VSCode
- Using system clipboard

## Related extensions

- [VSCodeVim](https://github.com/VSCodeVim/Vim) (**Required**) - Vim emulation for Visual Studio Code
- [vscode-emacs-region](https://github.com/ayrtonmassey/vscode-emacs-region) - provides region selection similar to that of Emacs
- [DDCODE](https://github.com/dotDeeka/ddcode) - provides some Emacs commands

## Required settings

- `vim.useCtrlKeys`: `false`

## Vim ctrl keybindings

| key           | mode   | type   | command                                     |
|---------------|--------|--------|---------------------------------------------|
| ctrl+f        | normal | Vim    | `extension.vim_ctrl+f`                      |
| ctrl+b        | normal | Vim    | `extension.vim_ctrl+b`                      |
| ctrl+d        | normal | Vim    | `extension.vim_ctrl+d`                      |
| ctrl+d        | visual | VSCode | `editor.action.addSelectionToNextFindMatch` |
| ctrl+u        | normal | Vim    | `extension.vim_ctrl+u`                      |
| ctrl+y        | normal | Vim    | `extension.vim_ctrl+y`                      |
| ctrl+e        | normal | Vim    | `extension.vim_ctrl+e`                      |
| ctrl+v        | normal | Vim    | `extension.vim_ctrl+v`                      |
| ctrl+a        | normal | Vim    | `extension.vim_ctrl+a`                      |
| ctrl+x ctrl+x | normal | Vim    | `extension.vim_ctrl+x`                      |
| ctrl+w h      | normal | Vim    | `extension.vim_navigateLeft`                |
| ctrl+w j      | normal | Vim    | `extension.vim_navigateDown`                |
| ctrl+w k      | normal | Vim    | `extension.vim_navigateUp`                  |
| ctrl+w l      | normal | Vim    | `extension.vim_navigateRight`               |
| ctrl+w ctrl+w | normal | Vim    | `extension.vim_navigateGroups`              |
| ctrl+shift+2  | normal | Vim    | `extension.vim_ctrl+shift+2`                |
| ctrl+pageup   | normal | Vim    | `extension.vim_ctrl+pageup`                 |
| ctrl+pagedown | normal | Vim    | `extension.vim_ctrl+pagedown`               |
| ctrl+n        | normal | -      | Disabled                                    |
| ctrl+h        | normal | -      | Disabled                                    |
| ctrl+r        | normal | Vim    | `redo`                                      |
| ctrl+w        | insert | Vim    | `extension.vim_ctrl+w`                      |
| ctrl+[        | insert | Vim    | Exit insert mode                            |
| ctrl+g        | -      | Emacs  | Exit each mode                              |
| ctrl+x        | -      | Emacs  | Emacs ctrl+x commands                       |
| ctrl+l        | -      | Emacs  | `emacs.scrollLineToCenter`                  |

### VSCode ctrl keybindings (VSCode defaults)

| key           | mode   | type   | command                                     |
|---------------|--------|--------|---------------------------------------------|
| ctrl+k        | normal | VSCode | VSCode ctrl+k commands                      |
| ctrl+c        | normal | VSCode | `editor.action.clipboardCopyAction`         |
| ctrl+m        | normal | VSCode | `editor.action.toggleTabFocusMode`          |
| ctrl+s        | normal | VSCode | `workbench.action.files.save`               |
| ctrl+p        | normal | VSCode | `workbench.action.quickOpen`                |
| ctrl+j        | -      | VSCode | `workbench.action.togglePanel`              |
| ctrl+o        | -      | VSCode | `workbench.action.files.openFile`           |
| ctrl+t        | -      | VSCode | `workbench.action.showAllSymbols`           |
| ctrl+i        | -      | VSCode | `expandLineSelection`                       |
| ctrl+z        | -      | VSCode | `undo`                       |

## Emacs ctrl-x commands

| key           | mode | command                                      |
|---------------|------|----------------------------------------------|
| ctrl+x ctrl+f | -    | `workbench.action.quickOpen`                 |
| ctrl+x b      | -    | `workbench.action.showAllEditors`            |
| ctrl+x ctrl+s | -    | `workbench.action.files.save`                |
| ctrl+x ctrl+w | -    | `workbench.action.files.saveAs`              |
| ctrl+x k      | -    | `workbench.action.closeActiveEditor`         |
| ctrl+x ctrl-k | -    | `workbench.action.closeAllEditors`           |
| ctrl+x k      | -    | `workbench.action.closeWindow`               |
| ctrl+x ctrl+n | -    | `workbench.action.newWindow`                 |
| ctrl+x 1      | -    | `workbench.action.closeEditorsInOtherGroups` |
| ctrl+x 2      | -    | `workbench.action.splitEditor`               |
| ctrl+x 3      | -    | `workbench.action.toggleEditorGroupLayout`   |
| ctrl+x o      | -    | `workbench.action.navigateEditorGroups`      |
| ctrl+x u      | -    | `workbench.action.navigateEditorGroups`      |

## Emacs keybindings

| key              | mode   | command                                 |
|------------------|--------|-----------------------------------------|
| alt+w            | -      | `editor.action.clipboardCopyAction`     |
| ctrl+w           | -      | `editor.action.clipboardCutAction`      |
| ctrl+y           | -      | `editor.action.clipboardPasteAction`    |
| ctrl+'           | -      | `editor.action.triggerSuggest`          |
| ctrl+alt+'       | -      | `editor.action.triggerParameterHints`   |
| ctrl+enter       | -      | `editor.action.insertLineAfter`         |
| ctrl+shift+enter | -      | `editor.action.insertLineBefore`        |
| ctrl+s           | insert | `editor.action.nextMatchFindAction`     |
| ctrl+r           | insert | `editor.action.previousMatchFindAction` |
| alt+;            | -      | `editor.action.commentLine`             |
| alt+x            | -      | `workbench.action.showCommands`         |
| ctrl+f           | insert | `cursorRight`                           |
| ctrl+b           | insert | `cursorLeft`                            |
| ctrl+p           | insert | `cursorUp`                              |
| ctrl+n           | insert | `cursorDown`                            |
| alt+f            | -      | `cursorWordRight`                       |
| alt+b            | -      | `cursorWordLeft`                        |
| ctrl+right       | insert | `cursorWordEndRight`                    |
| ctrl+left        | insert | `cursorWordStartLeft`                   |
| alt+v            | insert | `cursorPageUp`                          |
| ctrl+v           | insert | `cursorPageDown`                        |
| ctrl+a           | insert | `cursorHome`                            |
| ctrl+e           | insert | `cursorEnd`                             |
| shift+alt+,      | insert | `cursorTop`                             |
| shift+alt+.      | insert | `cursorBottom`                          |
| alt+f            | -      | `cursorWordRight`                       |
| alt+b            | -      | `cursorWordLeft`                        |
| ctrl+d           | insert | `deleteRight`                           |
| ctrl+h           | insert | `deleteLeft`                            |
| alt+d            | -      | `deleteWordRight`                       |
| alt+h            | -      | `deleteWordLeft`                        |

### Commands implemeted by this extension

| key              | mode   | command                                 |
|------------------|--------|-----------------------------------------|
| **ctrl+space**   | insert | `emacs.startRegionMode`                 |
| **ctrl+x space** | insert | `emacs.startColumnRegionMode`           |
| **ctrl+g**       | insert | `emacs.exitRegionMode`                  |
| **ctrl+k**       | insert | `emacs.cutAllRight`                     |
| **ctrl+l**       | -      | `emacs.scrollLineToCenter`              |

## Compatibility With Other Extensions

It is possible to combine this extension with other cursor movement extensions.

You can use the `inRegionMode` context flag in the `when` clause of your keybind to provide different behaviour for region mode vs. cursor mode. The default keybinds are laid out as follows:

```json
{
    "key": "DESIRED KEY",
    "command": "CURSOR MOVE COMMAND",
    "when": "editorTextFocus && !inRegionMode"
},
{
    "key": "DESIRED KEY",
    "command": "CURSOR MOVE & SELECT COMMAND",
    "when": "editorTextFocus && inRegionMode"
}
```

### Vim Normal Mode

```json
{
    "key": "DESIRED KEY",
    "command": "SOME COMMAND",
    "when": "editorTextFocus && vim.active && vim.mode != 'Insert'"
},
```

### Vim Insert Mode

```json
{
    "key": "DESIRED KEY",
    "command": "SOME COMMAND",
    "when": "editorTextFocus && vim.mode == 'Insert'"
},
{
    "key": "DESIRED KEY",
    "command": "SOME COMMAND",
    "when": "editorTextFocus && !vim.active"
},
```

## License

MIT