import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument } from "vscode";
import { HoverConverter } from "../../Converter/HoverConverter";

export class ExtensionHoverProvider implements HoverProvider {

    provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        return HoverConverter.provid(word);
    }
}