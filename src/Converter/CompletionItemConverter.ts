import { CompletionItem, CompletionItemKind, CompletionList, Hover, MarkdownString, SnippetString, Uri } from "vscode";
import { Snippet } from "../Provider/Snippet/Snippet";

export class CompletionItemConverter {

    private snippets: Snippet[];

    public constructor(snippets: Snippet[]) {
        this.snippets = snippets;
    }

    public convert(snippet: Snippet): CompletionItem {
        let completionItem = new CompletionItem(snippet.prefix, CompletionItemKind.Snippet);
        completionItem.detail = snippet.title;
        if (typeof snippet.body === 'string') {
            completionItem.insertText = new SnippetString(snippet.body);
        } else {
            completionItem.insertText = new SnippetString(snippet.body.join('\n'));
        }
        if (typeof snippet.description === 'string') {
            completionItem.documentation = new MarkdownString(snippet.description);
        }
        else {
            completionItem.documentation = new MarkdownString(snippet.description.join('\n'));
        }
        return completionItem;
    }

    public convertAll(): CompletionList<CompletionItem> {
        let completionList = new CompletionList();
        completionList.items = this.snippets.map((snippet) => {
            return this.convert(snippet);
        });
        return completionList;
    }
}