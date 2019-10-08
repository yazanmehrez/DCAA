export interface FacebookUserData {
    id: number;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    gender: string;
    locale: string;
    birthday: string;
    picture: FacebookPictureData;
}

export interface FacebookPictureData {
    data: FacebookPicture;
}

export interface FacebookPicture {
    height: number;
    width: number;
    isSilhouette: boolean;
    url: string;
}

export interface FacebookUserAccessTokenData {
    appId: number;
    type: string;
    application: string;
    expiresAt: number;
    isValid: boolean;
    userId: number;
}

export interface FacebookUserAccessTokenValidation {
    data: FacebookUserAccessTokenData;
}

export interface FacebookAppAccessToken {
    tokenType: string;
    accessToken: string;
}