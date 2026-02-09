// Safe dummy version of the Editor Communicator
// We don't need the editor logic for the live site.

export class EditCommunicator {
    constructor() {
        console.log("Editor communicator disabled for production.");
    }
}

let editorInstance: EditCommunicator | null = null;

export function initEditor(): EditCommunicator {
    if (!editorInstance) {
        editorInstance = new EditCommunicator();
    }
    return editorInstance;
}

// If your code was importing useEditor as a hook, this covers that base too
export function useEditor() {
    return {
        isEditing: false,
        toggleEdit: () => {},
        saveChanges: async () => {}
    };
}