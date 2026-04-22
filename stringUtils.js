/* fonction slugify */
/*Analyse du problème :
    Entrée: titre d'un article (chaîne de caractères)
    Sortie: slug (chaîne de caractères adaptée à une URL)

  Conception :
    mettre le titre d'un article tout en minuscules
    identifier tout ceux qui sont des caractères spéciaux, ponctuations et supprimer les
    remplacer les éspaces par un tiret
    enlever les éspaces aux éxtrémités

  Pseudo-code :
  Fonction slugify(text)
   DEBUT :
    prendre le titre et le mettre tout en minuscule
    parcourir tout les caractères du texte et efface tout les caractères qui ne sont pas : une lettre, un chiffre ou une éspace
    enlever les espaces qui sont au début ou à la fin du text
    remplacer les epaces qui restent par des tirets
    retouner le résultat
   FIN

*/
export const slugify = (text) => {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
       
};


/* fonction truncate */
/* Analyse du problème : 
     Entrées : une chaîne de caractère et la longueur maximal autorisée
     Sortie : une chaîne de caractères tronquée à la limite indiquée, sans couper de mot avec ajout de ...

   Conception :
     verifier Si la longueur du texte ne dépasse pas de la longueur maximal autorisée et si c'est le cas ne fait rien 
     ET SI la longueur du texte dépasse la longueur maximal autorisée, on le coupe d'abord à la position exacte de la limit
       Pour éviter de couper un mot on cherche la position du dernier " " dans cette partie qui est déjà coupée et on le recoupe a cette position
     ET on ajoute "..." à la fin 

   Pseudo-code : 
   FUNCTION truncate(texte, limite)
   DEBUT :
    SI la longueur du texte est <= limite 
        retourner le même texte
    FIN SI
    Couper le texte de début jusqu'à la limite
    Chercher la position du dernier espace dans le texte coupé
    Recoupe le texte du début jusqu'à cet espace
    Retourner le texte et mettre "..." à la fin
*/   
export const truncate = (text, limit) => {
    if (text.length <= limit) {
        return text;
    }
    const portionCoupee = text.substring(0, limit);
    const dernierEspace = portionCoupee.lastIndexOf(' ');
    return portionCoupee.substring(0, dernierEspace) + "..."
};


/* fonction countWords */
/*Analyse du problème : 
    Entrée : texte
    Sortie : nombre de mots
  
  Conception : 
    enlever les éspaces au début et à la fin du texte en utilisant le trim 
    ensuite on découpe la phrase à chaque fois qu'on trouve un ou plusieurs espaces pour pouvoir créer une liste 
    et après on garde que les éléments quui contiennent de lettres et on ignore les vides
    et enfin on compte le mots de la liste et faire le total
      
  Pseudo-code :
    DEBUT : 
      enlever les espaces au début et à la fin du texte et découper le texte à chaque groupe d'éspace pour créer une liste
      verifier la liste pour enlever les éléments vides
      compter tout les mots dans la liste
      retourner le nombre total de mot
    FIN
*/
export const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word !== "").length;
};


/* fonction escapeHTML */
/*Analyse du problème : 
    Entrée : chaîne de caractère à sécuriser
    Sortie : une nouvelle chaîne de caractères où tous les caractères spéciaux HTML ont été remplacés par leurs eentités correspondantes

  Conception :
    on va créer une liste de correspondance qui va associé chaque caractère spécial HTML à son entité sécurisée 
    on va parcourir tout le texte pour identifier ces caractères et les remplacer par leur correspondant
    
  Pseudo-code : 
    FONCTION escapeHTML(texte)
    DEBUT :
        Créer une liste de correspondance
        chercher tout les caractères spéciaux dans le texte
        remplacer chaque caractère spéciaux par sa version sécuriser
        retourner le texte final
    FIN
    
*/
export const escapeHTML = (text) => {
    const map = {
        '&': '&amp;',
        '<': '&lt',
        '>': '&gt;', 
        '"': '&quot;', 
        "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}; 