<h2 align="center"><img src="https://raw.githubusercontent.com/migrs/vscode-vimacs/master/images/icon.png" height="128"><br>VSCode Vimacs</h2>
<p align="center"><strong>Emacs keybindings for VSCodeVim</strong></p>

## Concepts

- Mainly using [VSCodeVim](https://github.com/VSCodeVim/Vim), you can also use Emacs like key bindings in Vim insert mode
- Supports Emacs region select key bindings

## Related extensions

- [VSCodeVim](https://github.com/VSCodeVim/Vim) (**Required**) - Vim emulation for Visual Studio Code
- [vscode-emacs-region](https://github.com/ayrtonmassey/vscode-emacs-region) - provides region selection similar to that of Emacs
- [DDCODE](https://github.com/dotDeeka/ddcode) - provides some Emacs commands

### Emacs keybindings

| key    | command                                 |
|--------|-----------------------------------------|
| alt+w  | `editor.action.clipboardCopyAction`     |
| ctrl+w | `editor.action.clipboardCutAction`      |
| ctrl+y | `editor.action.clipboardPasteAction`    |
| ctrl+s | `editor.action.nextMatchFindAction`     |
| ctrl+r | `editor.action.previousMatchFindAction` |
| ctrl+f | `cursorRight`                           |
| ctrl+b | `cursorLeft`                            |
| ctrl+p | `cursorUp`                              |
| ctrl+n | `cursorDown`                            |
| alt+f  | `cursorWordRight`                       |
| alt+b  | `cursorWordLeft`                        |
| ctrl+a | `cursorHome`                            |
| ctrl+e | `cursorEnd`                             |
| ctrl+d | `deleteRight`                           |
| ctrl+h | `deleteLeft`                            |
| alt+d  | `deleteWordRight`                       |
| alt+h  | `deleteWordLeft`                        |
| **ctrl+space**   | `emacs.startRegionMode`       |
| **ctrl+g**       | `emacs.exitRegionMode`        |
| **ctrl+k**       | `emacs.cutAllRight`           |
| **ctrl+l**       | `emacs.scrollLineToCenter`    |

## My settings.json

```json
    "vim.useCtrlKeys": false,
    "vim.overrideCopy": true,
    "vim.hlsearch": true,
    "vim.useSystemClipboard": false,
    "vim.visualstar": true,
    "vim.handleKeys": {
        "<C-f>": true,
        "<C-b>": true,
        "<C-u>": true,
        "<C-r>": true,
        "<C-v>": true,
        "<C-[>": true,
        "<C-w>": true,
    },
    "vim.cursorStylePerMode.normal" : "block",
    "vim.cursorStylePerMode.insert": "line-thin",
    "vim.cursorStylePerMode.replace": "block-outline",
    "vim.statusBarColorControl": true,
```
## Compatibility With Other Extensions

It is possible to combine this extension with other cursor movement extensions.

You can use the `inRegionMode` context flag in the `when` clause of your `keybindings.json` to provide different behaviours for region mode and cursor mode. The default key bindings are laid out as follows:

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

## License

MIT
