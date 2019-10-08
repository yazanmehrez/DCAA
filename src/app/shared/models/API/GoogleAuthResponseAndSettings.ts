export interface GoogleAuthResponse {
    email: string;
    firstName: string;
    lastName: string;
    locale: string;
    name: string;
    providerUserId: number;
    picture: string;
    emailConfirmed: boolean;
}

export interface GoogleApiTokenInfo {
    iss: string;
    at_hash: string;
    aud: string;
    sub: string;
    email_verified: string;
    azp: string;
    email: string;
    iat: string;
    exp: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    locale: string;
    alg: string;
    kid: string;
}