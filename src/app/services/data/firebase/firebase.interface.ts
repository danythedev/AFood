export interface SignUpResponse {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

export interface SignInResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
}

export interface LogInErrorResponse {
    error: {
        error: {
            code: number;
            errors: ErrorData[];
            message: string;
          };
    }
} 

export interface ErrorData {
    message: string;
    domain: string;
    reason: string;
}