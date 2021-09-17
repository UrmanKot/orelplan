export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export class News {
  id?: string;
  title: string;
  previewText: string;
  text: string;
  date: Date | string;
  uri: string;
}

export class Project {
  id?: string;
  uri?: string;
  text?: string;
}

export class Upload {
  key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
