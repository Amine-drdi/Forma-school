import {MdElectricBolt,} from "react-icons/md";
import { FaUserNurse,FaEnvira} from "react-icons/fa";
import {  FaHelmetSafety } from "react-icons/fa6";
import {
  TbBackhoe,
  TbForklift,
  TbCarCrane,
  TbCar4WdFilled
} from "react-icons/tb";
import { PiLadderSimpleLight } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
 

export const btpCategories = [
  { id : 0,
    name: "CACES R482 (Catégories A, B1 et F)",
    icon: TbBackhoe,
  },
  {  id :1,
    name: " Montage et Démontage d’Échafaudages Fixes (R408)",
    icon: TbCarCrane,
  },
  {  id :2,
    name: "Habilitations Électriques B0/H0/H0V",
    icon: TbForklift,
  },
  {  id : 3,
    name: "Habilitation Électrique B1-B2-BR-BC-H1-H2",
    icon: FaUserNurse,
  },
  { id : 4,
    name: "RGE FEEBAT RENOVE",
    icon: TbCar4WdFilled,
  }, 
  { id :5,
    name: "Travail en Hauteur et Prévention des Risques",
    icon: PiLadderSimpleLight,
  },
  {  id :6,
    name: "Gestion et Sécurité des Travaux de Démolition",
    icon: LuCable,
  },
  { id :7,
    name: "CACES R486 - Conduite de Nacelles Élévatrices (PEMP)",
    icon: MdElectricBolt,
  },
  { id : 8,
    name: "Sauveteur Secouriste du Travail (SST)",
    icon: FaHelmetSafety,
  },

  { id : 9,
    name: "Montage et Utilisation d’Échafaudages Roulants",
    icon: FaEnvira,
  },
  {  id : 10,
    name: " CACES R489 - Conduite de Chariots Élévateurs (Catégories 1A, 3, 5)",
    icon: FaEnvira,
  },
];


