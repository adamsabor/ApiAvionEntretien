export interface Aeronef {
    id: number;
    nom: string;
    type: string;
    numero_serie: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export type AeronefCreate = Omit<Aeronef, 'id' | 'created_at' | 'updated_at'>;