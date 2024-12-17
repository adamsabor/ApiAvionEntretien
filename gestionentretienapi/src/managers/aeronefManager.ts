import { aeronefModel } from "../models/aeronefModel";
import { Aeronef, AeronefCreate } from "../types/aeronef.types";
import { BusinessError } from "../types/error.types";

export const getAllAeronefs = async (): Promise<Aeronef[]> => {
  try {
    return await aeronefModel.getAll();
  } catch (error) {
    throw new BusinessError("Impossible de récupérer les aéronefs", error);
  }
};

export const getAeronefById = async (id: number): Promise<Aeronef> => {
  try {
    const aeronef = await aeronefModel.getById(id);
    if (!aeronef) {
      throw new BusinessError(`Aucun aéronef trouvé avec l'ID ${id}`);
    }
    return aeronef;
  } catch (error) {
    throw new BusinessError(`Erreur lors de la récupération de l'aéronef ${id}`, error);
  }
};

export const createAeronef = async (aeronefData: AeronefCreate): Promise<Aeronef> => {
  try {
    if (!aeronefData.nom || !aeronefData.type || !aeronefData.numero_serie) {
      throw new BusinessError("Données d'aéronef invalides");
    }
    return await aeronefModel.create(aeronefData);
  } catch (error) {
    throw new BusinessError("Impossible de créer l'aéronef", error);
  }
};

export const deleteAeronef = async (id: number): Promise<void> => {
  try {
    await aeronefModel.delete(id);
  } catch (error) {
    throw new BusinessError(`Impossible de supprimer l'aéronef ${id}`, error);
  }
};