import type { RsiProps } from "../types"
import { defaultRSIProps } from "../ReactSpreadsheetImport"

const fields = [
  {
    label: "Date de souscription",
    key: "DATE_DE_SOUSCRIPTION_DU_CONTRAT",
    fieldType: {
      type: "input",
    },
    example: "01/01/2023",
    validations: [
      {
        rule: "required",
        errorMessage: "La date de souscription est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d{2}/\\d{2}/\\d{4}$",
        errorMessage: "Le format de la date de souscription est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Date d'effet",
    key: "DATE_D_EFFET_DU_CONTRAT",
    fieldType: {
      type: "input",
    },
    example: "01/01/2023",
    validations: [
      {
        rule: "required",
        errorMessage: "La date d'effet est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d{2}/\\d{2}/\\d{4}$",
        errorMessage: "Le format de la date d'effet est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Date d'expiration",
    key: "DATE_D_ECHEANCE_DU_CONTRAT",
    fieldType: {
      type: "input",
    },
    example: "01/01/2023",
    validations: [
      {
        rule: "required",
        errorMessage: "La date d'expiration est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d{2}/\\d{2}/\\d{4}$",
        errorMessage: "Le format de la date d'échéance est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Genre du vehicule",
    key: "GENRE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "GV01",
    validations: [
      {
        rule: "required",
        errorMessage: "Le genre du véhicule est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^GV\\d{2}$",
        errorMessage: "Le format du genre du véhicule est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Numéro d'immatriculation",
    key: "IMMATRICULATION_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "0114AS01",
    validations: [
      {
        rule: "required",
        errorMessage: "L'immatriculation est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Type de véhicule",
    key: "TYPE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "TV01",
    validations: [
      {
        rule: "required",
        errorMessage: "Le type du véhicule est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^TV\\d{2}$",
        errorMessage: "Le format du type du véhicule est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Modèle du véhicule",
    key: "MODELE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "X5",
    validations: [
      {
        rule: "required",
        errorMessage: "Le modèle du véhicule est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Catégorie du véhicule",
    key: "CATEGORIE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "01",
    validations: [
      {
        rule: "required",
        errorMessage: "La catégorie est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d{2}$",
        errorMessage: "Le format de la catégorie du véhicule est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Usage du véhicule",
    key: "USAGE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "UV01",
    validations: [
      {
        rule: "required",
        errorMessage: "L'usage est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^UV\\d{2}$",
        errorMessage: "Le format de la catégorie du véhicule est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Source d'énergie",
    key: "ENERGIE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "SEES",
    validations: [
      {
        rule: "required",
        errorMessage: "La source d'energie est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^(SEES|SEDI|SEHY|SEEL)$",
        errorMessage: "Le format de la source d'énergie est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "Nombre de place",
    key: "NOMBRE_DE_PLACE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "5",
    validations: [
      {
        rule: "required",
        errorMessage: "Le nombre de place est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d+$",
        errorMessage: "Le nombre de place doit être un nombre",
        level: "error",
      },
    ],
  },
  {
    label: "Marque du véhicule",
    key: "MARQUE_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "TOYOTA",
    validations: [
      {
        rule: "required",
        errorMessage: "La marque est requise",
        level: "error",
      },
    ],
  },
  {
    label: "Numéro de chassis",
    key: "NUMERO_DE_CHASSIS_DU_VEHICULE",
    fieldType: {
      type: "input",
    },
    example: "01A1",
    validations: [
      {
        rule: "required",
        errorMessage: "Le numéro de chassis est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Nom du souscripteur",
    key: "NOM_DU_SOUSCRIPTEUR",
    fieldType: {
      type: "input",
    },
    example: "DION DETY",
    validations: [
      {
        rule: "required",
        errorMessage: "Le nom du souscripteur est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Type de souscripteur",
    key: "TYPE_DE_SOUSCRIPTEUR",
    fieldType: {
      type: "input",
    },
    example: "TAPP",
    validations: [
      {
        rule: "required",
        errorMessage: "Le type du souscripteur est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^(TSPP|TSPM)$",
        errorMessage: "Le type de souscripteur est incorrect",
        level: "error",
      },
    ],
  },
  {
    label: "E-mail souscripteur",
    key: "ADRESSE_EMAIL_DU_SOUSCRIPTEUR",
    fieldType: {
      type: "input",
    },
    example: "support@asacitechnologies.com",
    validations: [
      {
        rule: "required",
        errorMessage: "L'email du souscripteur est requis.",
        level: "error",
      },
      {
        rule: "regex",
        value: "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
        errorMessage: "L'email du souscripteur est incorrect.",
        level: "error",
      },
    ],
  },
  {
    label: "Contact du souscripteur",
    key: "NUMERO_DE_TELEPHONE_DU_SOUSCRIPTEUR",
    fieldType: {
      type: "input",
    },
    example: "0700000000",
    validations: [
      {
        rule: "required",
        errorMessage: "Le contact du souscripteur est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Boite postale souscripteur",
    key: "BOITE_POSTALE_DU_SOUSCRIPTEUR",
    fieldType: {
      type: "input",
    },
    example: "21 BP 5137 ABJ 21",
    validations: [
      {
        rule: "required",
        errorMessage: "La boite postale du souscripteur est requise",
        level: "error",
      },
    ],
  },
  {
    label: "Nom de l'assuré",
    key: "NOM_DE_L_ASSURE",
    fieldType: {
      type: "input",
    },
    example: "SALOMON DION",
    validations: [
      {
        rule: "required",
        errorMessage: "Le nom de l'assuré est requis",
        level: "error",
      },
    ],
  },
  {
    label: "E-mail de l'assuré",
    key: "ADRESSE_EMAIL_DE_L_ASSURE",
    fieldType: {
      type: "input",
    },
    example: "mon@assure.com",
    validations: [
      {
        rule: "required",
        errorMessage: "L'email de l'assuré est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
        errorMessage: "L'email de l'assuré est incorrect.",
        level: "error",
      },
    ],
  },
  {
    label: "Boite postale de l'assuré",
    key: "BOITE_POSTALE_DE_L_ASSURE",
    fieldType: {
      type: "input",
    },
    example: "01 BP ABJ 01",
    validations: [
      {
        rule: "required",
        errorMessage: "La boite postale de l'assuré est requise",
        level: "error",
      },
    ],
  },
  {
    label: "Contact de l'assuré",
    key: "TELEPHONE_MOBILE_DE_L_ASSURE",
    fieldType: {
      type: "input",
    },
    example: "0708000000",
    validations: [
      {
        rule: "required",
        errorMessage: "Le contact de l'assuré est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Numéro de police",
    key: "NUMERO_DE_POLICE",
    fieldType: {
      type: "input",
    },
    example: "01/2023",
    validations: [
      {
        rule: "required",
        errorMessage: "Le numéro de police est requis",
        level: "error",
      },
    ],
  },
  {
    label: "Montant de la RC",
    key: "PRIME_RC",
    fieldType: {
      type: "input",
    },
    example: "100",
    validations: [
      {
        rule: "required",
        errorMessage: "La RC est requise",
        level: "error",
      },
      {
        rule: "regex",
        value: "^\\d+$",
        errorMessage: "La RC doit être un nombre",
        level: "error",
      },
    ],
  },
  {
    label: "Type d'attestation",
    key: "TYPE_D_ATTESTATION_A_EDITER",
    fieldType: {
      type: "input",
    },
    example: "cimajaune",
    validations: [
      {
        rule: "required",
        errorMessage: "Le type d'attestation est requis",
        level: "error",
      },
      {
        rule: "regex",
        value: "^(cimajaune|cimaverte)$",
        errorMessage: "Le type d'attestation est incorrect",
        level: "error",
      },
    ],
  },
] as const

const mockComponentBehaviourForTypes = <T extends string>(props: RsiProps<T>) => props

export const mockRsiValues = mockComponentBehaviourForTypes({
  ...defaultRSIProps,
  fields: fields,
  onSubmit: (data) => {
    console.log(data.all.map((value) => value))
  },
  isOpen: true,
  onClose: () => {},
  // uploadStepHook: async (data) => {
  //   await new Promise((resolve) => {
  //     setTimeout(() => resolve(data), 4000)
  //   })
  //   return data
  // },
  // selectHeaderStepHook: async (hData, data) => {
  //   await new Promise((resolve) => {
  //     setTimeout(
  //       () =>
  //         resolve({
  //           headerValues: hData,
  //           data,
  //         }),
  //       4000,
  //     )
  //   })
  //   return {
  //     headerValues: hData,
  //     data,
  //   }
  // },
  // // Runs after column matching and on entry change, more performant
  // matchColumnsStepHook: async (data) => {
  //   await new Promise((resolve) => {
  //     setTimeout(() => resolve(data), 4000)
  //   })
  //   return data
  // },
})

export const editableTableInitialData = [
  {
    TYPE_D_ATTESTATION_A_EDITER: "cimajaune",
    IMMATRICULATION_DU_VEHICULE: "0004MM01",
    NUMERO_DE_CHASSIS_DU_VEHICULE: "1357849578001",
    GENRE_DU_VEHICULE: "",
    MARQUE_DU_VEHICULE: "MERCEDES BENZ",
    MODELE_DU_VEHICULE: "SERIE 7 COUPE 2022",
    CATEGORIE_DU_VEHICULE: "02",
    TYPE_DU_VEHICULE: "TV04",
    ENERGIE_DU_VEHICULE: "SEES",
    NOMBRE_DE_PLACE_DU_VEHICULE: "5",
    USAGE_DU_VEHICULE: "UV01",
    TYPE_DE_SOUSCRIPTEUR: "TSPP",
    NOM_DU_SOUSCRIPTEUR: "NOM SOUSCRIPTEUR",
    ADRESSE_EMAIL_DU_SOUSCRIPTEUR: "adresse@email.com",
    NUMERO_DE_TELEPHONE_DU_SOUSCRIPTEUR: "NUMERO TELEPHONE SOUSCRIPTEUR",
    BOITE_POSTALE_DU_SOUSCRIPTEUR: "BOITE POSTALE SOUSCRIPTEUR",
    NOM_DE_L_ASSURE: "NOM ASSURE",
    ADRESSE_EMAIL_DE_L_ASSURE: "adresse@email.com",
    TELEPHONE_MOBILE_DE_L_ASSURE: "0708091011",
    BOITE_POSTALE_DE_L_ASSURE: "01 BP 1234 ABIDJAN 01 ",
    PRIME_RC: "191000",
    NUMERO_DE_POLICE: "2022/222/1212",
    DATE_D_EFFET_DU_CONTRAT: "27/12/2022",
    DATE_D_ECHEANCE_DU_CONTRAT: "26/12/2023",
    DATE_DE_SOUSCRIPTION_DU_CONTRAT: "26/12/2022",
  },
  {
    TYPE_D_ATTESTATION_A_EDITER: "cimaverte",
    IMMATRICULATION_DU_VEHICULE: "",
    NUMERO_DE_CHASSIS_DU_VEHICULE: "1357849578002",
    GENRE_DU_VEHICULE: "GV04",
    MARQUE_DU_VEHICULE: "MERCEDES BENZ",
    MODELE_DU_VEHICULE: "SERIE 7 COUPE 2022",
    CATEGORIE_DU_VEHICULE: "02",
    TYPE_DU_VEHICULE: "TV04",
    ENERGIE_DU_VEHICULE: "SEES",
    NOMBRE_DE_PLACE_DU_VEHICULE: "5",
    USAGE_DU_VEHICULE: "UV01",
    TYPE_DE_SOUSCRIPTEUR: "TSPP",
    NOM_DU_SOUSCRIPTEUR: "NOM SOUSCRIPTEUR",
    ADRESSE_EMAIL_DU_SOUSCRIPTEUR: "adresse@email.com",
    NUMERO_DE_TELEPHONE_DU_SOUSCRIPTEUR: "NUMERO TELEPHONE SOUSCRIPTEUR",
    BOITE_POSTALE_DU_SOUSCRIPTEUR: "BOITE POSTALE SOUSCRIPTEUR",
    NOM_DE_L_ASSURE: "NOM ASSURE",
    ADRESSE_EMAIL_DE_L_ASSURE: "adresse@email.com",
    TELEPHONE_MOBILE_DE_L_ASSURE: "0708091011",
    BOITE_POSTALE_DE_L_ASSURE: "01 BP 1234 ABIDJAN 01 ",
    PRIME_RC: "191000",
    NUMERO_DE_POLICE: "2022/222/1212",
    DATE_D_EFFET_DU_CONTRAT: "27/12/2022",
    DATE_D_ECHEANCE_DU_CONTRAT: "26/12/2023",
    DATE_DE_SOUSCRIPTION_DU_CONTRAT: "26/12/2022",
  },
]

export const headerSelectionTableFields = [
  ["text", "num", "select", "bool"],
  ["Hello", "123", "one", "true"],
  ["Hello", "123", "one", "true"],
  ["Hello", "123", "one", "true"],
]
