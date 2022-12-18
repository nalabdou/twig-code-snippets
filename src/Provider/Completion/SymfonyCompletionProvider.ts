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
import { Symfony } from "../../Constant/Symfony";
import { CompletionItemConverter } from "../../Converter/CompletionItemConverter";
import { Loader } from "../Snippet/Loader";
import { Snippet } from "../Snippet/Snippet";


export class SymfonyCompletionProvider implements CompletionItemProvider {

    public constructor() {
    }

    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
        return this.load();
    }

    private load(): CompletionList<CompletionItem> {
        let snippets: Snippet[] = Loader.loadSymfonySnippets();
        return new CompletionItemConverter(snippets).convertAll();
    }

    private loadFilters(): Snippet[] {
        return require('../../snippets/symfony/filters.code-snippets.json');
    }

    private loadFunctions(): Snippet[] {
        return require('../../snippets/symfony/functions.code-snippets.json');
    }

    private loadTags(): Snippet[] {
        return require('../../snippets/symfony/tags.code-snippets.json');
    }

    private loadTests(): Snippet[] {
        return require('../../snippets/symfony/tests.code-snippets.json');
    }

    private loadExtra(): Snippet[] {
        return require('../../snippets/symfony/extra.code-snippets.json');
    }

}