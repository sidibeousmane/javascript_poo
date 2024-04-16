class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Vecteur2D: (x = ${this.x}, y = ${this.y})`);
    }
  
    add(other) {
      return new Vecteur2D(this.x + other.x, this.y + other.y);
    }
  }
  const v1 = new Vecteur2D(1, 2);
  const v2 = new Vecteur2D(3, 4);
  
  v1.afficher(); // Output: Vecteur2D: (x = 1, y = 2)
  v2.afficher(); // Output: Vecteur2D: (x = 3, y = 4)
  
  const sum = v1.add(v2);
  sum.afficher(); // Output: Vecteur2D: (x = 4, y = 6)
  class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Vecteur2D(x: ${this.x}, y: ${this.y})`);
    }
  }
  
  // Instantiate a Vecteur2D object without parameters
  const vecteur2D1 = new Vecteur2D();
  vecteur2D1.afficher(); // Output: Vecteur2D(x: 0, y: 0)
  
  // Instantiate a Vecteur2D object with two parameters
  const vecteur2D2 = new Vecteur2D(3, 4);
  vecteur2D2.afficher(); // Output: Vecteur2D(x: 3, y: 4)
  class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    display() {
      console.log(`Vecteur2D: (x = ${this.x}, y = ${this.y})`);
    }
  
    add(other) {
      if (other instanceof Vecteur2D) {
        return new Vecteur2D(this.x + other.x, this.y + other.y);
      } else if (typeof other === 'number') {
        return new Vecteur2D(this.x + other, this.y + other);
      } else {
        throw new Error('Invalid argument type');
      }
    }
  }
  
  // Example usage:
  const v1 = new Vecteur2D(1, 2);
  const v2 = new Vecteur2D(3, 4);
  const v3 = new Vecteur2D();
  
  v1.display(); // Vecteur2D: (x = 1, y = 2)
  v2.display(); // Vecteur2D: (x = 3, y = 4)
  v3.display(); // Vecteur2D: (x = 0, y = 0)
  
  const v4 = v1.add(v2);
  v4.display(); // Vecteur2D: (x = 4, y = 6)
  
  const v5 = v1.add(2);
  v5.display(); // Vecteur2D: (x = 3, y = 4)
  class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    add(other) {
      if (other instanceof Vecteur2D) {
        return new Vecteur2D(this.x + other.x, this.y + other.y);
      } else if (typeof other === 'number') {
        return new Vecteur2D(this.x + other, this.y + other);
      } else {
        throw new Error('Invalid argument type');
      }
    }
  
    display() {
      console.log(`Vecteur2D(x: ${this.x}, y: ${this.y})`);
    }
  }
  
  class Rectangle {
    constructor(longueur = 1, largeur = 1, nom = 'rectangle') {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = nom;
    }
  
    afficher() {
      console.log(`${this.nom} (longueur: ${this.longueur}, largeur: ${this.largeur})`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  
  const v1 = new Vecteur2D(1, 2);
  const v2 = new Vecteur2D(3, 4);
  
  v1.display(); // Vecteur2D(x: 1, y: 2)
  v2.display(); // Vecteur2D(x: 3, y: 4)
  
  const v3 = v1.add(v2);
  v3.display(); // Vecteur2D(x: 4, y: 6)
  
  const rect1 = new Rectangle(2, 3);
  const rect2 = new Rectangle(4, 5, 'carre');
  
  rect1.afficher(); // rectangle (longueur: 2, largeur: 3)
  rect2.afficher(); // carre (longueur: 4, largeur: 5)
  
  console.log(`Surface de ${rect1.nom}: ${rect1.surface()}`); // Surface de rectangle: 6
  console.log(`Surface de ${rect2.nom}: ${rect2.surface()}`); // Surface de carre: 20
  class Rectangle {
    constructor(longueur = 1, largeur = 1, nom = 'rectangle') {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = nom;
    }
  
    afficher() {
      console.log(`${this.nom} (longueur: ${this.longueur}, largeur: ${this.largeur})`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  class Carre extends Rectangle {
    constructor(cote, nom = 'carré') {
      super(cote, cote, nom);
    }
  }
  
  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Point (x: ${this.x}, y: ${this.y})`);
    }
  }
  const rect = new Rectangle(2, 3);
  const carre = new Carre(4);
  
  rect.afficher(); // rectangle (longueur: 2, largeur: 3)
  carre.afficher(); // carré (longueur: 4, largeur: 4)
  
  const point = new Point();
  point.afficher(); // Point (x: 0, y: 0)
  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Point (x: ${this.x}, y: ${this.y})`);
    }
  }
  
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1);
      this.extrem = new Point(x2, y2);
    }
  
    afficher() {
      console.log('Segment :');
      console.log('Origine :');
      this.orig.afficher();
      console.log('Extrémité :');
      this.extrem.afficher();
    }
  }
  const seg = new Segment(1, 2, 3, 4);
  seg.afficher();
  /* Output:
  Segment :
  Origine :
  Point (x: 1, y: 2)
  Extrémité :
  Point (x: 3, y: 4)
  */
 