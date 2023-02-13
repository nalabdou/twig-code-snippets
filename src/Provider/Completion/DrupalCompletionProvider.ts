import {
    CancellationToken,
    CompletionContext,
    CompletionItem,
    CompletionItemProvider,
    CompletionList,
    Position,
    ProviderResult,
    TextDocument
} from "vscode";
import { CompletionItemConverter } from "../../Converter/CompletionItemConverter";
import { Loader } from "../Snippet/Loader";
import { Snippet } from "../Snippet/Snippet";


export class DrupalCompletionProvider implements CompletionItemProvider {

    public constructor() {
    }

    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
        return this.load();
    }

    private load(): CompletionList<CompletionItem> {
        let snippets: Snippet[] = Loader.loadDrupalSnippets();
        return new CompletionItemConverter(snippets).convertAll();
    }
}