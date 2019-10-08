export interface Message {
    subject: string;
    body: string;
    sender: string;
    bcc: string;
    cc: string;
    relativeurl: string;
    plainBody: string;
    destination: string[];
}

export interface SMTPSettings {
    smtp: string;
    email: string;
    password: string;
    port: number;
    enableSSL: boolean;
}