import { Edit } from './edit-event.js';
export declare function localAttributeName(attribute: string): string;
export declare function handleEdit(edit: Edit): Edit;
export type LogEntry = {
    undo: Edit;
    redo: Edit;
};
