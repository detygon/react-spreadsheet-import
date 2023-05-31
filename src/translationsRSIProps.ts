import type { DeepPartial } from "ts-essentials"

export const translations = {
  uploadStep: {
    title: "Chargement du fichier",
    manifestTitle: "Exemple de données:",
    manifestDescription: "(Vous pourrez changer ou retirer des colonnes à l'étape suivante)",
    maxRecordsExceeded: (maxRecords: string) => `Trop d'enregistrement. Jusqu'à ${maxRecords} lignes autorisées`,
    dropzone: {
      title: "Formats supportés: .xlsx, .xls ou .csv",
      errorToastDescription: "Chargement rejeté",
      activeDropzoneTitle: "Déposer le fichier ici...",
      buttonTitle: "Choisissez le fichier",
      loadingTitle: "Chargement...",
    },
    selectSheet: {
      title: "Selection du fichier",
      nextButtonTitle: "Suivant",
    },
  },
  selectHeaderStep: {
    title: "Selection de l'en-tête",
    nextButtonTitle: "Suivant",
  },
  matchColumnsStep: {
    title: "Correspondance des colonnes",
    nextButtonTitle: "Suivant",
    userTableTitle: "Votre tableau",
    templateTitle: "Deviendra",
    selectPlaceholder: "Selectionner la colonne ...",
    ignoredColumnText: "Colonne ignorée",
    subSelectPlaceholder: "Selectionner...",
    matchDropdownTitle: "Faire correspondre",
    unmatched: "Introuvable",
    duplicateColumnWarningTitle: "Une autre colonne non sélectionnée",
    duplicateColumnWarningDescription: "Les colonnes ne peuvent pas être dupliquées",
  },
  validationStep: {
    title: "Validation des données",
    nextButtonTitle: "Confirmer",
    noRowsMessage: "Aucune donnée trouvé",
    noRowsMessageWhenFiltered: "Aucune donnée contenant des erreurs",
    discardButtonTitle: "Supprimer les lignes sélectionnées",
    filterSwitchTitle: "Montrer seulement les erreurs",
    downloadButtonTitle: "Télécharger",
    errorHeading:
      "Le fichier contient des erreurs surlignées en rouge. Veuillez les corriger via cette interface ou télécharger le fichier pour le faire hors ligne.",
  },
  alerts: {
    confirmClose: {
      headerTitle: "Quitter le flow",
      bodyText: "Etes vous sûr? Vous perdrez vos informations actuelles.",
      cancelButtonTitle: "Annuler",
      exitButtonTitle: "Quitter le flow",
    },
    submitIncomplete: {
      headerTitle: "Des erreurs détectées",
      bodyText: "Il y a toujours des lignes avec des erreurs. Les lignes avec des erreurs seront ignorées.",
      bodyTextSubmitForbidden: "Il y a toujours des lignes avec des erreurs.",
      cancelButtonTitle: "Annuler",
      finishButtonTitle: "Valider",
    },
    unmatchedRequiredFields: {
      headerTitle: "Certaines colonnes ne sont pas renseignées",
      bodyText: "Il y a des colonnes requises qui ne sont pas renseignées ou ignorées.",
      listTitle: "Colonnes non renseignées:",
      cancelButtonTitle: "Annuler",
      continueButtonTitle: "Continuer",
    },
    toast: {
      error: "Erreur",
    },
  },
}

export type TranslationsRSIProps = DeepPartial<typeof translations>
export type Translations = typeof translations
