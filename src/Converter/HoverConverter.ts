import { Hover, MarkdownString, ProviderResult } from "vscode";
import { Loader } from "../Provider/Snippet/Loader";
import { Snippet } from "../Provider/Snippet/Snippet";

export class HoverConverter {

    public static provid(word: string): ProviderResult<Hover> {

        let snippets: Snippet[] | undefined = this.filter('prefix', word);
        const hoverContents: MarkdownString[] | MarkdownString | undefined = [];

        snippets.forEach(snippet => {
            hoverContents.push(this.hoverContent(snippet));
        });

        return new Hover(hoverContents);
    }

    private static filter(searchCol: string, word: string): Snippet[] {
        const searchMethod = (v: Snippet) => v[searchCol] === word;
        return Loader.loadAllSnippets().filter(searchMethod);
    }

    private static hoverContent(snippet: Snippet): MarkdownString {
        let hoverContent = new MarkdownString();
        hoverContent.supportHtml = true;
        if (typeof snippet.description === 'string') {
            hoverContent.value = snippet.description;
        } else {
            hoverContent.value = snippet.description.join('\n');
        }
        return hoverContent;
    }

}