<script>
  let slideIndex = 1; // Index de la diapositive active
  showSlides(slideIndex); // Affiche la première diapositive

  // Fonction pour changer de slide (Précédent / Suivant)
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Fonction pour aller directement à une slide spécifique
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Fonction principale pour afficher les diapositives et mettre à jour les indicateurs
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1; // Si on dépasse la dernière, revenir à la première
    }
    if (n < 1) {
      slideIndex = slides.length; // Si on est avant la première, revenir à la dernière
    }

    // Masque toutes les diapositives
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Désactive tous les indicateurs (points)
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Affiche la diapositive active et active l'indicateur correspondant
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Fonction pour activer le défilement automatique
  let autoIndex = 0; // Index pour le défilement automatique
  function autoSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Masque toutes les diapositives
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    autoIndex++;
    if (autoIndex > slides.length) {
      autoIndex = 1; // Si on dépasse la dernière, revenir à la première
    }

    // Affiche la diapositive en cours et active l'indicateur correspondant
    slides[autoIndex - 1].style.display = "block";
    dots[autoIndex - 1].className += " active";

    setTimeout(autoSlides, 5000); // Change de diapositive toutes les 5 secondes
  }

  // Activer le défilement automatique en appelant la fonction
  autoSlides();
</script>