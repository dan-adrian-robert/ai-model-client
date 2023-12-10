
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


export type TGPTChartMessage = {
    role: GPTRole;
    content: string | ChartConfig;
};

export type ChartConfig = {
    data: any;
    options: any;
}