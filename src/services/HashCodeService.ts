import { Request, Response } from "express";
import bcrypt from "bcrypt";

import generateRandomNumber from "../utils/generateRandomNumbers";
import { ICode } from "../infraestructure/interfaces/ICode";
import { HashCode } from "../infraestructure/database/models/Code";
import addTenMinutesToDate from "../utils/addTenMinutesToDate";
import { sentEmail } from "./EmailService";
import { validateCodTemplate } from "../utils/template";

export const generate = async (req: Request, res: Response) => {
   const { userId, email, name } = req.body;
   // sent to e-mail


   const hash = generateRandomNumber(8);

   // Generate hash to password
   const salt = await bcrypt.genSalt(12);
   const cryptHash = await bcrypt.hash(hash, salt);

   const end = addTenMinutesToDate(new Date());

   const newHash: ICode = {
      userId,
      hash: cryptHash,
      endDate: end,
   };
   try {
      await HashCode.create(newHash);

      const html = validateCodTemplate(name, hash);

      await sentEmail(email, html, "MAKE - Código de confirmação.");

      return res.status(201).json({
         message: `Código de confirmação enviado para o E-mail: ${email}`,
      });
   } catch (error) {
      return res.status(500).json({ message: "Erro com o servidor!" });
   }
};

export const validate = async (req: Request, res: Response) => {
   const { hash, userId } = req.body;
   if (!hash) {
      return null;
   }

   try {
      const findHash = await HashCode.findOne({ userId: userId });

      const checkHash = await bcrypt.compare(hash, `${findHash?.hash}`);

      if (!checkHash) {
         return res.status(404).json({ message: "Hash inválido!" });
      }
      await deleteOne(userId);
      return res.status(200).json(findHash);
   } catch (error) {
      return null;
   }
};

async function deleteOne(id: string) {
   if (!id) {
      return null;
   }

   try {
      return await HashCode.deleteOne({ userId: id });
   } catch (error) {
      return false;
   }
}

export const schedule = async () => {
   const currentDateTime = new Date();
   const findAllValidations = await HashCode.find();


   if (findAllValidations.length >= 1)
      findAllValidations.forEach(async (element) => {
         const endDate = new Date(element.endDate as Date);

         const formatMinutes = `${endDate.getHours()}:${endDate.getMinutes()}`;
         const currentDate = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;


         // console.log(currentDateTime.getHours())
         // console.log(endDate.getHours())

         if (formatMinutes === currentDate) {
            await deleteOne(element.userId)
         }
         // if (currentDateTime.getHours() >= endDate.getHours()) {
         //    await deleteOne(element.userId);
         // }
      });
};
