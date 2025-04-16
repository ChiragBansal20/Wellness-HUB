<script>
    // Collapsible sections
    document.querySelectorAll('.collapsible-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');
        
        // Toggle active class
        header.classList.toggle('active');
        
        // Toggle content visibility
        if (isActive) {
          content.classList.remove('show');
          header.querySelector('i').className = 'fa fa-chevron-down';
        } else {
          content.classList.add('show');
          header.querySelector('i').className = 'fa fa-chevron-up';
        }
      });
    });
    
    // Review filters
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter reviews
        document.querySelectorAll('.review-item').forEach(review => {
          if (filter === 'all' || review.getAttribute('data-rating') === filter) {
            review.style.display = 'block';
          } else {
            review.style.display = 'none';
          }
        });
      });
    });
    
    // Color selection
    document.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        
        // Update selected color
        document.querySelectorAll('.color-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        option.classList.add('selected');
        
        // Update text
        document.querySelector('.selected-color').innerHTML = `Selected: <strong>${color}</strong>`;
      });
    });
    
    // Quantity selector
    const quantityInput = document.getElementById('quantity');
    
    document.getElementById('decrease-quantity').addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
    
    document.getElementById('increase-quantity').addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
    
    // Thumbnail click
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.addEventListener('click', () => {
        // Update
