interface IPyramid {
  (args: number): void;
}

interface IEquiTriangle {
  (args: number): void;
}

interface IhasPermission {
  (moduleName: string, role: string, permissionType: string): boolean;
}

interface IvalidateUsers {
  (users: { traineeEmail: string; reviewerEmail: string; }[]): void;
}

interface IvalidateEmail{
  (trainee: string , reviewer: string): void;
}

export { IPyramid, IEquiTriangle, IhasPermission, IvalidateUsers, IvalidateEmail }
