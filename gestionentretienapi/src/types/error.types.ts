export class DatabaseError extends Error {
    constructor(message: string, public originalError?: any) {
      super(message);
      this.name = 'DatabaseError';
    }
  }
  
  export class BusinessError extends Error {
    constructor(message: string, public originalError?: any) {
      super(message);
      this.name = 'BusinessError';
    }
  }
  