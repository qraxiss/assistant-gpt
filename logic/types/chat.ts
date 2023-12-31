/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface appendMessage {
  message: {
    content: string;
    role: string;
  };
  name: string;
}

export interface createChat {
  name: string;
}

export interface deleteChat {
  name: string;
}

export interface getChat {
  name?: string;
}

export interface getSingleChat {
  name: string;
}

export interface updateChat {
  chat?: {
    name?: string;
  };
  name: string;
}
