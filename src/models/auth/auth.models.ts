export type LoginRequestBody = {
 email: string;
 password: string;
};

export type RegisterRequestBody = {
 email: string;
 password: string;
};

export type TokenResponse = {
 token: string;
};
