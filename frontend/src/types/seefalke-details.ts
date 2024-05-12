// export interface ShipWiki {
//   wiki: {
//     Schiffskennung: {
//       Schiffstyp: string;
//       Motorboottyp: string;
//       Hersteller: string;
//       Modell: string;
//       Baujahr: string;
//       Jahr_des_ersten_gebauten_Modells: string;
//       Beschreibung: string;
//     };
//     Generelle_Informationen: {
//       Reisegeschwindigkeit: string;
//       Maximale_Geschwindigkeit: string;
//       Rumpfmaterial: string;
//       Kieltyp: string;
//       CE_Kategorie: string;
//       Klassifikationsgesellschaft: string;
//       Heimathafen: string;
//       Dienststatus: string;
//       Jahr_Verschrottet_Verloren: string;
//     };
//     Dimensionen: {
//       Gesamtlänge: string;
//       Länge_Wasserlinie: string;
//       Breite: string;
//       Tiefgang: string;
//       Höhe: string;
//       Verdrängung_Leergewicht: string;
//       Verdrängung_Voll_beladen: string;
//     };
//     Infos_zum_Bau: {
//       Baujahr: string;
//       Kiel_gelegt: string;
//       Werft_Rumpfnummer: string;
//       Rumpfnummer: string;
//       Designer_Name: string;
//       Interner_Designer_Name: string;
//       Werft_Standort: string;
//       Datum_Verschrottet_Verloren: string;
//     };
//     Motor: {
//       Anzahl_der_Hauptmotoren: number;
//       Hauptmotoren_Hersteller: string;
//       Motorenmodell: string;
//       Motorleistung: string;
//       Antriebs_Antriebstyp: number;
//       Motordrehzahl: number;
//       Motorhubraum: string;
//       Kraftstoffart: string;
//       Kraftstoffverbrauch: string;
//       Kraftstoffverbrauch_pro_Seemeile: string;
//       Reichweite_bei_Reisegeschwindigkeit: string;
//       Reichweite_bei_12_Knoten: string;
//       Propeller: string;
//     };
//     Unterkunft: {
//       Gästekabinen: string;
//       Gästeschlafplätze: string;
//       Besatzungskabinen: string;
//       Besatzungsschlafplätze: string;
//       Gäste_WCs: string;
//       Besatzungs_WCs: string;
//       Maximale_Anzahl_der_Passagiere: string;
//     };
//   }[];
// }

export interface ShipWiki {
  wiki: Array<{
    [section: string]: {
      [key: string]: string | number;
    };
  }>;
}
