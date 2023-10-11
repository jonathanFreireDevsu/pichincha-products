export interface ValidationData {
    id: ValidationItem;
    name: ValidationItem;
    description: ValidationItem;
    logo: ValidationItem;
    freeDate: ValidationItem;
    revisionDate: ValidationItem;
  }
  
export interface ValidationItem {
    name: string;
    placeHolder: string;
    errorMessage: string;
    value: string;
  }