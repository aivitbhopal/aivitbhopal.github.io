 // Function for Type Selection
 function selectType(type) {
    var allTypes = document.querySelectorAll('.merch-size-type-inner .size');
    allTypes.forEach(function (element) {
      element.style.backgroundColor = '';
      element.style.color = '';
    });

    var selectedType = document.querySelector('.merch-size-type-inner .size.' + type);
    selectedType.style.backgroundColor = '#fff';
    selectedType.style.color = '#000';
  }

  // Function for Size Selection
  function selectSize(size) {
    var allSizes = document.querySelectorAll('.merch-size-type .size');
    allSizes.forEach(function (element) {
      element.style.backgroundColor = '';
      element.style.color = '';
    });

    var selectedSize = document.querySelector('.merch-size-type .size.' + size);
    selectedSize.style.backgroundColor = '#fff';
    selectedSize.style.color = '#000';
  }

  // Function for Button Click
  function storeSelection() {
    var selectedType = document.querySelector('.merch-size-type-inner .size[style*="background-color: #fff"]');
    var selectedSize = document.querySelector('.merch-size-type .size[style*="background-color: #fff"]');

    var typeValue = selectedType ? selectedType.textContent.trim() : '';
    var sizeValue = selectedSize ? selectedSize.textContent.trim() : '';

    alert('Selected Type: ' + typeValue + '\nSelected Size: ' + sizeValue);
  }


   // Add event listeners
   var typeElements = document.querySelectorAll('.merch-size-type-inner .size');
   typeElements.forEach(function (element) {
     element.addEventListener('click', function () {
       var type = element.textContent.trim();
       selectType(type);
     });
   });

   var sizeElements = document.querySelectorAll('.merch-size-type .size');
   sizeElements.forEach(function (element) {
     element.addEventListener('click', function () {
       var size = element.textContent.trim();
       selectSize(size);
     });
   });

   var buyButton = document.querySelector('.merch-link');
   buyButton.addEventListener('click', storeSelection);