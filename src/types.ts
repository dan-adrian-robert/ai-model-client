
export enum Role {
    user = 'user',
    system ='system',
    assistant = 'assistant',
}

export type GPTRole = keyof typeof Role;

export type TGPTMessage = {
    role: GPTRole;
    content: string;
};

