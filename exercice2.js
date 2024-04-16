const Etudiant = {
    nom: '',
    prenom: '',
    age: 0,
    cne: '',
    etudier() {
      console.log(`${this.nom} ${this.prenom} est en train d'étudier.`);
    }
  };
  
  const Professeur = {
    nom: '',
    age: 0,
    cin: '',
    enseigner() {
      console.log(`${this.nom} est en train d'enseigner.`);
    }
  };
  Etudiant.etudier = function() {
    if (this.etatEtude === true) {
      console.log(`L'étudiant ${this.nom} ${this.prenom} est déjà en train d'étudier.`);
    } else {
      this.etatEtude = true;
      console.log(`L'étudiant ${this.nom} ${this.prenom} commence à étudier.`);
    }
  };
  
Professeur.enseigner = function() {

    console.log(`${this.nom} est en train d'enseigner.`);
  
  };
  const etudiants = [
    { nom: 'alami', prenom: 'nidal', age: 20, cne: '12345678' },
    { nom: 'sidibe', prenom: 'ousmane', age: 22, cne: '87654321' },
    { nom: 'traore', prenom: 'Pierre', age: 23, cne: '55555555' }
  ];
  
  etudiants.sort((a, b) => {
    const nomCompare = a.nom.localeCompare(b.nom);
    if (nomCompare === 0) {
      return a.prenom.localeCompare(b.prenom);
    } else {
      return nomCompare;
    }
  });
  
  etudiants.forEach(etudiant => {
    console.log(`Nom : ${etudiant.nom}, Prénom : ${etudiant.prenom}, Age : ${etudiant.age}, CNE : ${etudiant.cne}`);
  });
  console.log(`Nom : ${etudiant.nom}, Prénom : ${etudiant.prenom}, Age : ${etudiant.age}, CNE : ${etudiant.cne}`.toLocaleString('fr-FR'));
  