// Creates interface (similar to class) that will define what the task includes

export interface Task {
    id?: number // optional ID,
    text: string;
    day: string;
    reminder: boolean
}