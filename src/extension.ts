import * as vscode from 'vscode';
import { Config } from './Helpers/Config';
import { ContributeCompletionProvider } from './Provider/Completion/ContributeCompletionProvider';
import { CraftCompletionProvider } from './Provider/Completion/CraftCompletionProvider';
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

	if (Config.enableCraft) {
		let craftProvider = vscode.languages.registerCompletionItemProvider('twig', new CraftCompletionProvider());
		context.subscriptions.push(craftProvider);
	}

}

export function enableHover(context: vscode.ExtensionContext) {
	if (Config.enableHover) {
		let hoverProvider = vscode.languages.registerHoverProvider('twig', new ExtensionHoverProvider());
		context.subscriptions.push(hoverProvider);
	}
}