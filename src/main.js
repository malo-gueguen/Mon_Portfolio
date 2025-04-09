
      document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track');
    
        // Clone le contenu pour l'effet de boucle
        const clone = track.cloneNode(true);
        clone.classList.add('carousel-clone');
        track.parentElement.appendChild(clone);
    
        let position = 0;
    
        function animate() {
          position -= 0.5;
    
          const width = track.scrollWidth;
          if (Math.abs(position) >= width) {
            position = 0;
          }
    
          track.style.transform = `translateX(${position}px)`;
          clone.style.transform = `translateX(${position + width}px)`;
    
          requestAnimationFrame(animate);
        }
    
        animate();
      });

      document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track-revers');
      
        // Clone le contenu pour l'effet de boucle inversée
        const clone = track.cloneNode(true);
        clone.classList.add('carousel-clone-revers');
        track.parentElement.appendChild(clone);
      
        let position = 0;
      
        function animate() {
          position += 0.5; // Inverse : on avance vers la droite
      
          const width = track.scrollWidth;
          if (position >= width) {
            position = 0;
          }
      
          // On translate vers la droite, donc le clone est placé à gauche
          track.style.transform = `translateX(${position}px)`;
          clone.style.transform = `translateX(${position - width}px)`;
      
          requestAnimationFrame(animate);
        }
      
        animate();
      });
      