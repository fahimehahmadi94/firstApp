export class Task {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = 'Fahimeh';
        this.items = [
            // new TodoItem('Buy Showes', false),
            // new TodoItem('Do work', false),
        ]
    }
}

export class TodoItem {

    constructor(
        public action: string,
        public done: boolean
    ) { }
}