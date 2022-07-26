import { IDataRepo } from "../models/IDataRepo";

export class DataRepo {
   private _filename: string;

   constructor(filename: string) {
      this._filename = filename;
   }

   public async getJSON(): Promise<IDataRepo[]> {
      try {
         const response = await fetch(this._filename);
         const result = await response.json();
         return result 
      } catch(err) {
         console.error(err);
      }

      return [];
   }  
} 