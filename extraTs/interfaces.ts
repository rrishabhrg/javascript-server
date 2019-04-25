export interface functionPyramid {
    (args: string): void;
}

export interface functionEquiTriangle {
    (args: string): void;
}

export interface function_hasPermission {
    (moduleName: string, role: string, permissionType: string): boolean;
}

export interface function_validateUsers {
    (users: { traineeEmail: string; reviewerEmail: string; }[]): void;
}

export interface function_validateEmail{
    (trainee: string , reviewer: string): void;
}