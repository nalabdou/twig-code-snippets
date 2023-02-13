import { workspace } from "vscode";

export class Config {


    public static get enableTwig(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableTwig');
    }

    public static get enableSymfony(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableSymfony');
    }

    public static get enableHover(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableHover');
    }

    public static get enableContribute(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableContribute');
    }

    public static get enableCraft(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableCraft');
    }

    public static get enableDrupal(): boolean | undefined {
        return workspace.getConfiguration('twigCodeSnippets').get('enableDrupal');
    }

    public static get(property: string) {
        return workspace.getConfiguration('twigCodeSnippets').get(property);
    }
}