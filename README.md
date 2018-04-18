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

## Normal mode (Vim)

Blank mode means it is valid in all modes.  
Blank type means it is not original keymap.

### Vim ctrl keybindings

| key           | mode   | type   | command                                     |
|---------------|--------|--------|---------------------------------------------|
| ctrl+f        | normal | Vim    | `extension.vim_ctrl+f`                      |
| ctrl+b        | normal | Vim    | `extension.vim_ctrl+b`                      |
| ctrl+d        | normal | Vim    | `extension.vim_ctrl+d`                      |
| ctrl+u        | normal | Vim    | `extension.vim_ctrl+u`                      |
| ctrl+y        | normal | Vim    | `extension.vim_ctrl+y`                      |
| ctrl+e        | normal | Vim    | `extension.vim_ctrl+e`                      |
| ctrl+v        | normal | Vim    | `extension.vim_ctrl+v`                      |
| ctrl+a        | normal | Vim    | `extension.vim_ctrl+a`                      |
| ctrl+r        | normal | Vim    | `extension.vim_ctrl+r`                      |
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
| ctrl+w        | insert | Vim    | `extension.vim_ctrl+w`                      |
| ctrl+[        | insert | Vim    | Exit insert mode                            |
| ctrl+g        | -      | Emacs  | Exit each mode                              |
| ctrl+x        | -      | Emacs  | Emacs ctrl+x commands                       |
| ctrl+l        | -      | Emacs  | `emacs.scrollLineToCenter`                  |

### VSCode ctrl keybindings

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
| ctrl+z        | -      | VSCode | `undo`                                      |
| ctrl+r        | insert | VSCode | `redo`                                      |
| ctrl+v        | visual | VSCode | `editor.action.clipboardPasteAction`        |
| ctrl+d        | visual | VSCode | `editor.action.addSelectionToNextFindMatch` |

## Insert mode (Emacs)

Blank mode means it is valid in all modes.  
Blank type means it is not original keymap.

### Emacs ctrl-x commands

| key            | mode | type  | command                                      |
|----------------|------|-------|----------------------------------------------|
| ctrl+x ctrl+f  | -    | Emacs | `workbench.action.quickOpen`                 |
| ctrl+x b       | -    | Emacs | `workbench.action.showAllEditors`            |
| ctrl+x ctrl+s  | -    | Emacs | `workbench.action.files.save`                |
| ctrl+x ctrl+w  | -    | Emacs | `workbench.action.files.saveAs`              |
| ctrl+x k       | -    | Emacs | `workbench.action.closeActiveEditor`         |
| ctrl+x ctrl-c  | -    | Emacs | `workbench.action.closeAllEditors`           |
| ctrl+x ctrl+n  | -    | -     | `workbench.action.newWindow`                 |
| ctrl+x 1       | -    | Emacs | `workbench.action.closeEditorsInOtherGroups` |
| ctrl+x 2       | -    | Emacs | `workbench.action.splitEditor`               |
| ctrl+x 3       | -    | Emacs | `workbench.action.toggleEditorGroupLayout`   |
| ctrl+x o       | -    | Emacs | `workbench.action.navigateEditorGroups`      |
| ctrl+x shift+] | -    | Emacs | `workbench.action.increaseViewSize`          |
| ctrl+x shift+[ | -    | Emacs | `workbench.action.decreaseViewSize`          |
| ctrl+x n       | -    | -     | `workbench.action.files.newUntitledFile`     |
| ctrl+x h       | -    | Emacs | `editor.action.selectAll`                    |
| ctrl+x u       | -    | Emacs | `undo`                                       |
| ctrl+x r       | -    | -     | `redo`                                       |

### Emacs keybindings

| key              | mode   | type  | command                                 |
|------------------|--------|-------|-----------------------------------------|
| alt+w            | -      | Emacs | `editor.action.clipboardCopyAction`     |
| ctrl+w           | insert | Emacs | `editor.action.clipboardCutAction`      |
| ctrl+y           | insert | Emacs | `editor.action.clipboardPasteAction`    |
| ctrl+'           | -      | -     | `editor.action.triggerSuggest`          |
| ctrl+alt+'       | -      | -     | `editor.action.triggerParameterHints`   |
| ctrl+enter       | -      | Emacs | `editor.action.insertLineAfter`         |
| ctrl+shift+enter | -      | Emacs | `editor.action.insertLineBefore`        |
| ctrl+s           | insert | Emacs | `editor.action.nextMatchFindAction`     |
| ctrl+r           | insert | Emacs | `editor.action.previousMatchFindAction` |
| alt+;            | -      | Emacs | `editor.action.commentLine`             |
| alt+x            | -      | Emacs | `workbench.action.showCommands`         |
| ctrl+f           | insert | Emacs | `cursorRight`                           |
| ctrl+b           | insert | Emacs | `cursorLeft`                            |
| ctrl+p           | insert | Emacs | `cursorUp`                              |
| ctrl+n           | insert | Emacs | `cursorDown`                            |
| alt+f            | -      | Emacs | `cursorWordRight`                       |
| alt+b            | -      | Emacs | `cursorWordLeft`                        |
| ctrl+right       | insert | Emacs | `cursorWordEndRight`                    |
| ctrl+left        | insert | Emacs | `cursorWordStartLeft`                   |
| alt+v            | insert | Emacs | `cursorPageUp`                          |
| ctrl+v           | insert | Emacs | `cursorPageDown`                        |
| ctrl+a           | insert | Emacs | `cursorHome`                            |
| ctrl+e           | insert | Emacs | `cursorEnd`                             |
| shift+alt+,      | insert | Emacs | `cursorTop`                             |
| shift+alt+.      | insert | Emacs | `cursorBottom`                          |
| alt+f            | -      | Emacs | `cursorWordRight`                       |
| alt+b            | -      | Emacs | `cursorWordLeft`                        |
| ctrl+d           | insert | Emacs | `deleteRight`                           |
| ctrl+h           | insert | Emacs | `deleteLeft`                            |
| alt+d            | -      | Emacs | `deleteWordRight`                       |
| alt+h            | -      | Emacs | `deleteWordLeft`                        |
| ctrl+/           | -      | Emacs | `undo`                                  |
| ctrl+shift+/     | -      | Emacs | `redo`                                  |

### Commands implemeted by this extension

| key              | mode   | type  | command                                 |
|------------------|--------|-------|-----------------------------------------|
| **ctrl+space**   | insert | Emacs | `emacs.startRegionMode`                 |
| **ctrl+x space** | insert | -     | `emacs.startColumnRegionMode`           |
| **ctrl+g**       | insert | Emacs | `emacs.exitRegionMode`                  |
| **ctrl+k**       | insert | Emacs | `emacs.cutAllRight`                     |
| **ctrl+l**       | -      | Emacs | `emacs.scrollLineToCenter`              |

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