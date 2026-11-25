/* ===== Configuration générale : tout ce qui change souvent est ici ===== */
const CONFIG = {
  nom: "Seconde Vis",
  logo: "SecondeVis",   // graphie du logo (sans espace)
  devise: "$",
  courriel: "bonjour@exemple.com",
  adresse: "Entrepôt Seconde Vis, 1250 rue de l'Industrie",
  horaires: "Du lundi au samedi, de 8 h à 18 h",
  dernierArrivage: "2026-11-16T08:30",   // dernier renouvellement du stock
  prochainArrivage: "2026-11-19T08:00"   // prochain arrivage prévu
};

/* ===== Produits =====
   etat : 3 = très bon, 2 = bon, 1 = abîmé
   photo : (facultatif) chemin de l'image, ex. photo: "img/mon-produit.jpg" ; sans photo, une case beige s'affiche */
const PRODUITS = [
  { id: "p01", nom: "Planches de pin 2x4", cat: "bois", prix: 2.50, prixNeuf: 6.50, stock: 34, unite: "/ planche", etat: 3, provenance: "Chantier résidentiel", photo: "img/planches-pin.png" },
  { id: "p02", nom: "Madriers de chêne", cat: "bois", prix: 14.95, prixNeuf: 42.00, stock: 6, unite: "/ madrier", etat: 2, provenance: "Rénovation d'entrepôt", photo: "img/madriers-chene.png", nouveau: true },
  { id: "p03", nom: "Contreplaqué 12 mm", cat: "bois", prix: 19.95, prixNeuf: 52.00, stock: 11, unite: "/ panneau", etat: 3, provenance: "Chantier de bureaux", photo: "img/contreplaque.png" },
  { id: "p05", nom: "Fers à béton (lot de 10 barres)", cat: "metal", prix: 17.95, prixNeuf: 45.00, stock: 18, unite: "/ lot", etat: 2, provenance: "Chantier d'immeuble", photo: "img/fers-a-beton.png" },
  { id: "p06", nom: "Vis et boulons (1 kg)", cat: "metal", prix: 4.50, prixNeuf: 14.90, stock: 42, unite: "/ sachet", etat: 3, provenance: "Surplus de chantier", photo: "img/vis-boulons.png", nouveau: true },
  { id: "p07", nom: "Tôle ondulée galvanisée", cat: "metal", prix: 11.90, prixNeuf: 32.00, stock: 3, unite: "/ feuille", etat: 2, provenance: "Démolition d'atelier", photo: "img/tole-ondulee.png" },
  { id: "p08", nom: "Tubes acier carrés", cat: "metal", prix: 9.50, prixNeuf: 24.90, stock: 9, unite: "/ tube", etat: 3, provenance: "Chantier industriel", photo: "img/tubes-acier.png", nouveau: true },
  { id: "p09", nom: "Briques rouges (lot de 20)", cat: "autre", prix: 6.98, prixNeuf: 22.00, stock: 25, unite: "/ lot", etat: 2, provenance: "Démolition résidentielle", photo: "img/briques-rouges.png", nouveau: true },
  { id: "p10", nom: "Sacs de ciment entamés", cat: "autre", prix: 1.95, prixNeuf: 12.90, stock: 2, unite: "/ sac", etat: 1, provenance: "Fin de chantier", photo: "img/sacs-ciment.png" },
  { id: "p11", nom: "Carreaux céramique (1 m²)", cat: "autre", prix: 8.90, prixNeuf: 28.00, stock: 14, unite: "/ m²", etat: 3, provenance: "Surplus de commande", photo: "img/carreaux-ceramique.png", nouveau: true },
  { id: "p12", nom: "Casque de chantier", cat: "autre", prix: 6.99, prixNeuf: 16.99, stock: 5, unite: "/ casque", etat: 2, provenance: "Stock d'entreprise", photo: "img/casque-chantier.png" },
  { id: "p13", nom: "Tuyaux PVC", cat: "autre", prix: 4.50, prixNeuf: 11.90, stock: 20, unite: "/ tuyau", etat: 3, provenance: "Chantier de plomberie", photo: "img/tuyaux-pvc.png", nouveau: true }
];