import {DirectoryNode, FileNode, FileSystemTree} from "@webcontainer/api";

export interface IdeFile { name: string; path: string; }
export interface IdeDir { name: string; path: string; children: Array<IdeFile | IdeDir>; }
export interface IdeTree { root: IdeDir; }
export type WCFile = FileNode;
export type WCDir = DirectoryNode;
export type WCTree = FileSystemTree;
