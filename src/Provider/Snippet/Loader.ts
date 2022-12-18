import { Snippet } from "./Snippet";

export class Loader {

    public static loadTwigSnippets(): Snippet[] {
        return [
            ...require('../../snippets/twig/filters.code-snippets.json'),
            ...require('../../snippets/twig/functions.code-snippets.json'),
            ...require('../../snippets/twig/tags.code-snippets.json'),
            ...require('../../snippets/twig/tests.code-snippets.json'),
            ...require('../../snippets/twig/extra.code-snippets.json'),
        ];
    }

    public static loadSymfonySnippets(): Snippet[] {
        return [
            ...require('../../snippets/symfony/filters.code-snippets.json'),
            ...require('../../snippets/symfony/functions.code-snippets.json'),
            ...require('../../snippets/symfony/tags.code-snippets.json'),
            ...require('../../snippets/symfony/tests.code-snippets.json'),
            ...require('../../snippets/symfony/extra.code-snippets.json'),
        ];
    }

    public static loadContributeSnippets(): Snippet[] {
        return [
            ...require('../../snippets/contributes/nalabdou.code-snippets.json'),
        ];
    }

    public static loadAllSnippets(): Snippet[] {
        return [
            ...this.loadTwigSnippets(),
            ...this.loadSymfonySnippets(),
            ...this.loadContributeSnippets(),
        ];
    }

}