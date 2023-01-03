import { Config } from "../../Helpers/Config";
import { Snippet } from "./Snippet";

export class Loader {

    public static loadTwigSnippets(): Snippet[] {

        if (!Config.enableTwig) {
            return [];
        }

        return [
            ...require('../../snippets/twig/filters.code-snippets.json'),
            ...require('../../snippets/twig/functions.code-snippets.json'),
            ...require('../../snippets/twig/tags.code-snippets.json'),
            ...require('../../snippets/twig/tests.code-snippets.json'),
            ...require('../../snippets/twig/extra.code-snippets.json'),
        ];
    }

    public static loadSymfonySnippets(): Snippet[] {

        if (!Config.enableSymfony) {
            return [];
        }

        return [
            ...require('../../snippets/symfony/filters.code-snippets.json'),
            ...require('../../snippets/symfony/functions.code-snippets.json'),
            ...require('../../snippets/symfony/tags.code-snippets.json'),
            ...require('../../snippets/symfony/tests.code-snippets.json'),
            ...require('../../snippets/symfony/extra.code-snippets.json'),
        ];
    }

    public static loadContributeSnippets(): Snippet[] {

        if (!Config.enableContribute) {
            return [];
        }

        return [
            ...require('../../snippets/contributes/nalabdou.code-snippets.json'),
        ];
    }

    public static loadCraftSnippets(): Snippet[] {

        if (!Config.enableCraft) {
            return [];
        }

        return [
            ...require('../../snippets/craft/filters.code-snippets.json'),
            ...require('../../snippets/craft/functions.code-snippets.json'),
            ...require('../../snippets/craft/tags.code-snippets.json'),
            ...require('../../snippets/craft/tests.code-snippets.json'),
        ];
    }

    public static loadAllSnippets(): Snippet[] {
        return [
            ...this.loadTwigSnippets(),
            ...this.loadSymfonySnippets(),
            ...this.loadContributeSnippets(),
            ...this.loadCraftSnippets(),
        ];
    }

}