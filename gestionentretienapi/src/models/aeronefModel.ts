import { pool } from "../config/db";
import { Aeronef, AeronefCreate } from "../src/types/aeroneftypes";
import { DatabaseError } from "../types/error.types";

export const aeronefModel = {
  async getAll(): Promise<Aeronef[]> {
    const connection = await pool.getConnection();
    try {
      const results = await connection.query("SELECT * FROM aeronefs");
      return results as Aeronef[];
    } catch (error) {
      throw new DatabaseError("Erreur lors de la récupération des aéronefs", error);
    } finally {
      connection.release();
    }
  },

  async getById(id: number): Promise<Aeronef | null> {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(
        "SELECT * FROM aeronefs WHERE id = ?",
        [id]
      );
      return result as Aeronef;
    } catch (error) {
      throw new DatabaseError(`Erreur lors de la récupération de l'aéronef ${id}`, error);
    } finally {
      connection.release();
    }
  },

  async create(aeronef: AeronefCreate): Promise<Aeronef> {
    const connection = await pool.getConnection();
    try {
      const result = await connection.query(
        "INSERT INTO aeronefs (nom, type, numero_serie) VALUES (?, ?, ?)",
        [aeronef.nom, aeronef.type, aeronef.numero_serie]
      );
      return { id: result.insertId, ...aeronef } as Aeronef;
    } catch (error) {
      throw new DatabaseError("Erreur lors de la création de l'aéronef", error);
    } finally {
      connection.release();
    }
  },

  async delete(id: number): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const result = await connection.query("DELETE FROM aeronefs WHERE id = ?", [id]);
      if (result.affectedRows === 0) {
        throw new Error(`Aucun aéronef trouvé avec l'ID ${id}`);
      }
    } catch (error) {
      throw new DatabaseError(`Erreur lors de la suppression de l'aéronef ${id}`, error);
    } finally {
      connection.release();
    }
  },
};