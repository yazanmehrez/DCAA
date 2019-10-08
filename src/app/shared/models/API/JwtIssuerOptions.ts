export interface JwtIssuerOptions {
    issuer: string;
    subject: string;
    audience: string;
    validFor: any;
    signingCredentials: any;
}
