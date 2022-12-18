import * as vscode from 'vscode';
import { Config } from './Helpers/Config';
import { ContributeCompletionProvider } from './Provider/Completion/ContributeCompletionProvider';
import { SymfonyCompletionProvider } from './Provider/Completion/SymfonyCompletionProvider';
import { TwigCompletionProvider } from './Provider/Completion/TwigCompletionProvider';
import { ExtensionHoverProvider } from './Provider/Hover/ExtensionHoverProvider';


export function activate(context: vscode.ExtensionContext) {
	enableSnippets(context);
	enableHover(context);
}

export function deactivate() { }

export function enableSnippets(context: vscode.ExtensionContext) {

	if (Config.enableTwig) {
		let twigProvider = vscode.languages.registerCompletionItemProvider('twig', new TwigCompletionProvider());
		context.subscriptions.push(twigProvider);
	}

	if (Config.enableSymfony) {
		let symfonyProvider = vscode.languages.registerCompletionItemProvider('twig', new SymfonyCompletionProvider());
		context.subscriptions.push(symfonyProvider);
	}

	if (Config.enableContribute) {
		let contributeProvider = vscode.languages.registerCompletionItemProvider('twig', new ContributeCompletionProvider());
		context.subscriptions.push(contributeProvider);
	}

}

export function enableHover(context: vscode.ExtensionContext) {
	if (Config.enableHover) {
		let hoverProvider = vscode.languages.registerHoverProvider('twig', new ExtensionHoverProvider());
		context.subscriptions.push(hoverProvider);
	}
}