import { Hover, MarkdownString, ProviderResult, Uri } from "vscode";
import { Loader } from "../Provider/Snippet/Loader";
import { Snippet } from "../Provider/Snippet/Snippet";

export class HoverConverter {

    public static provid(word: string): ProviderResult<Hover> {

        const snippet: Snippet = Loader.loadAllSnippets().filter((v) => v.prefix === word)[0];

        const hoverContent = new MarkdownString();
        hoverContent.supportHtml = true;
        if (typeof snippet.description === 'string') {
            hoverContent.value = snippet.description;
        } else {
            hoverContent.value = snippet.description.join('\n');
        }
        return new Hover(hoverContent);
    }

}