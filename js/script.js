// Constructor for the Store Item objects
function Record(
  id,
  name,
  price,
  quantityInStock,
  maximumPerCustomer,
  category,
  shippingCost,
  reviews,
  description,
  image
) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantityInStock = quantityInStock;
  this.maximumPerCustomer = maximumPerCustomer;
  this.category = category;
  this.shippingCost = shippingCost;
  this.reviews = reviews;
  this.description = description;
  this.image = image;
}

// Constructor for the Cart Item objects
function Cart(id, price, quantityInCart, shippingCost) {
  this.id = id;
  this.price = price;
  this.quantityInCart = quantityInCart;
  this.shippingCost = shippingCost;
}

// Constructor for the Review Item objects
function Review(review, rating) {
  this.review = review;
  this.rating = rating;
}

// Empty arrays for the Record and Cart objects
var records = [];
var cart = [];

// An initialize function called when the page loads
function initialize() {
  // Create new date object
  var now = new Date();

  // Retrieve the local/current date and time as a string and store it in a variable
  var currentDateTime = now.toLocaleString();

  // Display the current date and time to the document
  document.getElementById("date-time-div").innerText = currentDateTime;

  // Populate the records array with item objects
  records.push(
    new Record(
      "KL2017",
      "Kendrick Lamar - DAMN. (2017)",
      56.35,
      43,
      4,
      "Hip-Hop",
      4.99,
      [new Review("Not Kendrick's best work, but still excellent.", 4)],
      "Kendrick Lamar's 2017 album, 'DAMN.,' is a critically acclaimed hip-hop masterpiece that explores themes of spirituality, racial identity, and personal struggles. With its introspective lyrics, diverse musical styles, and thought-provoking narratives, the album received widespread praise for its artistic depth and social commentary.",
      "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
    ),
    new Record(
      "TS2014",
      "Taylor Swift - 1989 (2014)",
      24.99,
      87,
      9,
      "Pop",
      3.99,
      [new Review("Amazing pop album!", 4)],
      "Taylor Swift's '1989' is a pop masterpiece that showcases her transition from country to mainstream pop. Known for its catchy tunes and empowering lyrics, this album received widespread acclaim and numerous awards.",
      "https://i.scdn.co/image/ab67616d0000b273b7e976d2b35c767f9012cb72"
    ),
    new Record(
      "AM2013",
      "Arctic Monkeys - AM (2013)",
      30.5,
      51,
      5,
      "Rock",
      5.5,
      [new Review("Solid rock album with a cool vibe.", 3)],
      "Arctic Monkeys' 'AM' is a critically acclaimed indie rock album known for its sleek production and Alex Turner's charismatic vocals. The album features hits like 'Do I Wanna Know?' and 'R U Mine?'",
      "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163"
    ),
    new Record(
      "BP2016",
      "Beyoncé - Lemonade (2016)",
      40.0,
      66,
      7,
      "R&B",
      4.75,
      [new Review("A groundbreaking R&B album.", 5)],
      "Beyoncé's 'Lemonade' is a visually stunning and emotionally powerful R&B album. It explores themes of infidelity, empowerment, and racial identity, receiving acclaim for its innovation and impact.",
      "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23"
    ),
    new Record(
      "R2016",
      "Rihanna - ANTI (2016)",
      35.75,
      70,
      7,
      "R&B",
      4.25,
      [new Review("Rihanna at her most diverse and experimental.", 3)],
      "'ANTI' by Rihanna is a genre-defying album that incorporates elements of R&B, pop, and even rock. With hits like 'Work' and 'Needed Me,' the album showcases Rihanna's versatility as an artist.",
      "https://i.scdn.co/image/ab67616d0000b2737b688587a6754481c53f6bb7"
    ),
    new Record(
      "MJ1982",
      "Michael Jackson - Thriller (1982)",
      50.0,
      97,
      10,
      "Pop",
      5.0,
      [new Review("The best-selling album of all time.", 5)],
      "Michael Jackson's 'Thriller' is the best-selling album of all time, known for its iconic title track, 'Beat It,' and 'Billie Jean.' The album is a landmark in pop music history, with its groundbreaking music videos and innovative production.",
      "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97"
    ),
    new Record(
      "PF1973",
      "Pink Floyd - The Dark Side of the Moon (1973)",
      55.25,
      82,
      8,
      "Rock",
      6.25,
      [new Review("A masterpiece of progressive rock.", 4)],
      "'The Dark Side of the Moon' by Pink Floyd is a landmark progressive rock album. Known for its concept, experimental sound, and iconic album cover, it has become one of the best-selling albums of all time.",
      "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe"
    ),
    new Record(
      "ABBA1976",
      "ABBA - Arrival (1976)",
      28.99,
      53,
      5,
      "Pop",
      4.5,
      [new Review("Classic pop from the Swedish supergroup.", 4)],
      "ABBA's 'Arrival' is a classic pop album featuring hits like 'Dancing Queen' and 'Money, Money, Money.' The Swedish supergroup's catchy tunes and harmonies made them one of the most successful bands in the 1970s.",
      "https://i.scdn.co/image/ab67616d0000b27370f7a1b35d5165c85b95a0e0"
    ),
    new Record(
      "T1996",
      "Tupac - All Eyez On Me (1996)",
      35.75,
      23,
      2,
      "Hip-Hop",
      5.5,
      [
        new Review(
          "Tupac's double-disc masterpiece with 'California Love' and 'How Do U Want It.'",
          5
        ),
      ],
      "'All Eyez On Me' by Tupac is a double-disc hip-hop masterpiece with iconic tracks like 'California Love' and 'How Do U Want It.' The album is a landmark in West Coast hip-hop history.",
      "https://i.scdn.co/image/ab67616d0000b273073aebff28f79959d2543596"
    ),
    new Record(
      "U21987",
      "U2 - The Joshua Tree (1987)",
      33.5,
      34,
      3,
      "Rock",
      5.25,
      [new Review("U2's iconic and politically charged album.", 4)],
      "U2's 'The Joshua Tree' is an iconic rock album known for its politically charged lyrics and anthemic sound. Hits like 'With or Without You' and 'Where the Streets Have No Name' helped define the sound of the 1980s.",
      "https://i.scdn.co/image/ab67616d0000b273f8996a3f97e80d9d700635c3"
    ),
    new Record(
      "EC1977",
      "Eric Clapton - Slowhand (1977)",
      29.75,
      75,
      8,
      "Rock",
      4.0,
      [new Review("Classic rock and blues from Clapton.", 4)],
      "Eric Clapton's 'Slowhand' is a classic rock and blues album featuring hits like 'Cocaine' and 'Wonderful Tonight.' Clapton's guitar skills and soulful vocals are showcased throughout the album.",
      "https://i.scdn.co/image/ab67616d0000b2735e7464d9d8a25b2bf74b782a"
    ),
    new Record(
      "QN1977",
      "Queen - News of the World (1977)",
      32.9,
      87,
      9,
      "Rock",
      4.25,
      [
        new Review(
          "Queen's iconic rock album with 'We Will Rock You' and 'We Are the Champions.'",
          4
        ),
      ],
      "'News of the World' by Queen is an iconic rock album featuring hits like 'We Will Rock You' and 'We Are the Champions.' Known for its diverse sound, it's one of Queen's most celebrated albums.",
      "https://i.scdn.co/image/ab67616d0000b273049850069343dae7ce1b64f7"
    ),
    new Record(
      "BD1975",
      "Bob Dylan - Blood on the Tracks (1975)",
      27.5,
      62,
      6,
      "Folk",
      3.75,
      [new Review("Bob Dylan's introspective masterpiece.", 5)],
      "'Blood on the Tracks' by Bob Dylan is an introspective folk-rock masterpiece. The album is known for its poetic lyrics and emotional depth, exploring themes of love, heartbreak, and reflection.",
      "https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba"
    ),
    new Record(
      "EM2000",
      "Eminem - The Marshall Mathers LP (2000)",
      29.99,
      79,
      8,
      "Hip-Hop",
      4.25,
      [
        new Review(
          "Eminem's groundbreaking hip-hop album with 'Stan' and 'The Real Slim Shady.'",
          4
        ),
      ],
      "'The Marshall Mathers LP' by Eminem is a groundbreaking hip-hop album featuring hits like 'Stan' and 'The Real Slim Shady.' Eminem's raw lyrics and storytelling made it a critical and commercial success.",
      "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    ),
    new Record(
      "ACDC1980",
      "AC/DC - Back in Black (1980)",
      40.5,
      77,
      8,
      "Rock",
      6.5,
      [new Review("AC/DC's iconic hard rock album.", 4)],
      "'Back in Black' by AC/DC is an iconic hard rock album and one of the best-selling albums of all time. Known for its powerful riffs and anthemic songs, it's a cornerstone of classic rock.",
      "https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae"
    ),
    new Record(
      "PR1984",
      "Prince - Purple Rain (1984)",
      27.5,
      23,
      2,
      "Pop",
      4.0,
      [
        new Review(
          "Prince's iconic album with hits like 'Purple Rain' and 'When Doves Cry.'",
          5
        ),
      ],
      "'Purple Rain' by Prince is an iconic pop/rock album featuring hits like 'Purple Rain' and 'When Doves Cry.' The album and its accompanying film elevated Prince to superstar status.",
      "https://i.scdn.co/image/ab67616d0000b273d52bfb90ee8dfeda8378b99b"
    ),
    new Record(
      "M1989",
      "Madonna - Like a Prayer (1989)",
      25.99,
      64,
      6,
      "Pop",
      3.75,
      [
        new Review(
          "Madonna's groundbreaking pop album with hits like 'Like a Prayer' and 'Express Yourself.'",
          5
        ),
      ],
      "'Like a Prayer' by Madonna is a groundbreaking pop album featuring hits like 'Like a Prayer' and 'Express Yourself.' The album received critical acclaim for its bold themes and diverse musical styles.",
      "https://i.scdn.co/image/ab67616d0000b27329b3fdd3b0e5b0daae3a37b0"
    ),
    new Record(
      "ME2001",
      "Missy Elliott - Miss E... So Addictive (2001)",
      31.5,
      31,
      3,
      "Hip-Hop",
      4.25,
      [
        new Review(
          "Missy Elliott's groundbreaking hip-hop masterpiece with infectious beats and innovative production.",
          5
        ),
      ],
      "'Miss E... So Addictive' is Missy Elliott's groundbreaking hip-hop masterpiece, showcasing her unique style with infectious beats and innovative production. The album is a testament to Elliott's creativity and influence in the hip-hop genre.",
      "https://i.scdn.co/image/ab67616d0000b2732e3969990abe1229c0879a7b"
    ),
    new Record(
      "NY1975",
      "Neil Young - Tonight's the Night (1975)",
      26.99,
      61,
      6,
      "Folk",
      3.5,
      [
        new Review(
          "Neil Young's raw and emotional rock album with 'Tonight's the Night' and 'Speakin' Out.'",
          5
        ),
      ],
      "'Tonight's the Night' by Neil Young is a raw and emotional rock album featuring tracks like 'Tonight's the Night' and 'Speakin' Out.' The album is known for its unpolished sound and poignant lyrics.",
      "https://i.scdn.co/image/ab67616d0000b2738633aaa5f02a54efc8a5b255"
    ),
    new Record(
      "FO2016",
      "Frank Ocean - Blonde (2016)",
      34.25,
      43,
      4,
      "R&B",
      4.5,
      [
        new Review(
          "Frank Ocean's critically acclaimed R&B/experimental album with 'Nikes' and 'Ivy' is a masterpiece.",
          5
        ),
      ],
      "'Blonde' by Frank Ocean is a critically acclaimed R&B/experimental album featuring tracks like 'Nikes' and 'Ivy.' The album is known for its introspective lyrics and unique production, earning praise for its artistic depth.",
      "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526"
    )
  );

  // Call the displayRecords() function
  displayRecords();

  // Call the displayCart() function
  displayCart();

  calculateCartTotals();
}

// A function to display the store items array dynamically
function displayRecords() {
  // Store the output in a variable and clear its inner HTML
  var recordsOutput = document.getElementById("records-output");
  recordsOutput.innerHTML = "";

  // Store the selected category in a variable
  var selectedCategory = document.getElementById("category-filter").value;

  // Create an empty array for the selected records based on the category
  var selectedRecords = [];

  // Find which records' categories match the category selected in the dropdown filter
  for (var i = 0; i < records.length; i++) {
    // If the selected category is all, push all records to the selected records array
    if (selectedCategory === "all") {
      selectedRecords.push(records[i]);
      // Only push records that match the selected category to the selected records array
    } else if (selectedCategory === records[i].category.toLowerCase()) {
      selectedRecords.push(records[i]);
    }
  }

  // Loop through the selected records array
  for (var j = 0; j < selectedRecords.length; j++) {
    // Store the currently indexed record in a variable
    var record = selectedRecords[j];

    // Create a container for each record and give it a class name
    var recordContainer = document.createElement("figure");
    recordContainer.classList.add("record-container");

    // Create record image and info elements and assign them class names
    var recordImage = document.createElement("img");
    recordImage.classList.add("record-image");

    var recordInfo = document.createElement("figcaption");
    recordInfo.classList.add("record-info");

    // Modify the record image and info elements with the corresponding information
    recordImage.src = record.image;
    recordInfo.innerHTML =
      record.name +
      "<br>" +
      "$" +
      record.price.toFixed(2) +
      "<br>" +
      "<strong>ID:</strong> " +
      record.id +
      "<br>" +
      "<strong>Quantity in stock:</strong> " +
      record.quantityInStock +
      "<br>" +
      "<strong>Maximum per customer:</strong> " +
      record.maximumPerCustomer;

    // Append the record image and info to the container
    recordContainer.appendChild(recordImage);
    recordContainer.appendChild(recordInfo);

    // Append the record container to the record output
    recordsOutput.appendChild(recordContainer);
  }
}

// Create a function that will display the cart array
function displayCart() {
  // Store the table's body used to display the cart in a variable
  var cartTableBody = document.getElementById("cart-table-body");

  // Store the table row used to display the header in a variable
  var cartTableRowHeader = document.getElementById("cart-table-row-header");

  // Remove any existing content within the table's header row
  while (cartTableRowHeader.firstChild) {
    cartTableRowHeader.removeChild(cartTableRowHeader.firstChild);
  }

  // If the cart is empty, display a message that states it is empty within the table header and append it to the header's row
  if (cart.length === 0) {
    var cartTableHeader = document.createElement("th");
    cartTableHeader.innerText = "Your cart is currently empty.";
    cartTableRowHeader.appendChild(cartTableHeader);
  } else {
    // Otherwise, create table header elements for the ID, price, quantity and subtotal for each item
    var recordIdHeader = document.createElement("th");
    var priceHeader = document.createElement("th");
    var quantityHeader = document.createElement("th");
    var subtotalHeader = document.createElement("th");

    // Modify the table header elements
    recordIdHeader.innerText = "Record ID";
    priceHeader.innerText = "Price";
    quantityHeader.innerText = "Quantity";
    subtotalHeader.innerText = "Subtotal";

    // Append the table header elements to the header's row
    cartTableRowHeader.appendChild(recordIdHeader);
    cartTableRowHeader.appendChild(priceHeader);
    cartTableRowHeader.appendChild(quantityHeader);
    cartTableRowHeader.appendChild(subtotalHeader);

    // Loop through the cart array
    for (var i = 0; i < cart.length; i++) {
      // Store the currently indexed cart item in a variable
      var record = cart[i];

      // Store the currently indexed item's ID in a variable
      var recordID = record.id;

      // Find the existing table row based on the item's ID
      var existingRow = findRowByRecordID(recordID);

      // If an existing row is found, update the quantity, subtotal and price
      if (existingRow) {
        existingRow.getElementsByTagName("td")[2].innerText =
          record.quantityInCart;

        var price = Number(
          existingRow.getElementsByTagName("td")[1].innerText.replace("$", "")
        );
        var newSubtotal = price * record.quantityInCart;
        existingRow.getElementsByTagName("td")[3].innerText =
          "$" + newSubtotal.toFixed(2);

        existingRow.getElementsByTagName("td")[1].innerText =
          "$" + record.price.toFixed(2);
      } else {
        // If no existing row is found, create a new table row
        var temporaryRow = document.createElement("tr");

        // Create new table data elements for each cart item
        var recordIdColumn = document.createElement("td");
        var priceColumn = document.createElement("td");
        var quantityColumn = document.createElement("td");
        var subtotalColumn = document.createElement("td");

        // Modify the table data elements with the corresponding information
        recordIdColumn.innerHTML = record.id;
        priceColumn.innerHTML = "$" + record.price.toFixed(2);
        quantityColumn.innerHTML = record.quantityInCart;
        subtotalColumn.innerHTML =
          "$" + (record.price * record.quantityInCart).toFixed(2);

        // Append each table data element to the table row
        temporaryRow.appendChild(recordIdColumn);
        temporaryRow.appendChild(priceColumn);
        temporaryRow.appendChild(quantityColumn);
        temporaryRow.appendChild(subtotalColumn);

        // Append the table row to the table body
        cartTableBody.appendChild(temporaryRow);
      }
    }
  }
}

// A helper function to find a table row based on the item's ID
function findRowByRecordID(recordID) {
  // Retrive all table rows within the cart table body
  var rows = document
    .getElementById("cart-table-body")
    .getElementsByTagName("tr");

  // Loop through each row
  for (var i = 0; i < rows.length; i++) {
    // Retrive the table data element containing the item's ID for the current row
    var rowRecordIDElement = rows[i].getElementsByTagName("td")[0];

    // Check if the table data element exists
    if (rowRecordIDElement) {
      // Retrieve the text content of the item's ID from the table data element
      var rowRecordID = rowRecordIDElement.innerText;

      // If the row's ID mataches the provided ID, return the row
      if (rowRecordID === recordID) {
        return rows[i];
      }
    }
  }
  // If no matching row is found, return null
  return null;
}

// Create a function that will calculate and display the total for the order in the cart
function calculateCartTotals() {
  // Store the div element used to display the cart totals in a variable
  var cartTotals = document.getElementById("cart-totals");

  // Remove any existing content within the cart totals div
  while (cartTotals.firstChild) {
    cartTotals.removeChild(cartTotals.firstChild);
  }

  // Initialize variables to track the item subtotal and estimated shipping
  var recordsSubtotal = 0;
  var estimatedShipping = 0;

  // Loop through the cart array
  for (var i = 0; i < cart.length; i++) {
    // Accumulate the subtotal by multiplying the item's price by its quantity in the cart
    recordsSubtotal += cart[i].price * cart[i].quantityInCart;

    // Accumulate the estimated shipping cost for each item
    estimatedShipping += cart[i].shippingCost;
  }

  // Calculate the overall subtotal by adding the item subtotal and estimated shipping
  var subtotal = recordsSubtotal + estimatedShipping;

  // Calculate the estimated tax as 13% of the subtotal
  var estimatedTax = subtotal * 0.13;

  // Calculate the total order cost by adding the subtotal and estimated tax
  var orderTotal = subtotal + estimatedTax;

  // Create paragraph elements to display each component of the cart totals
  var recordsSubtotalP = document.createElement("p");
  var estimatedShippingP = document.createElement("p");
  var subtotalP = document.createElement("p");
  var estimatedTaxP = document.createElement("p");
  var orderTotalP = document.createElement("p");

  // Modify the paragraph elements with the corresponding information
  recordsSubtotalP.innerHTML =
    "<strong>Records Subtotal:</strong> $" + recordsSubtotal.toFixed(2);
  estimatedShippingP.innerHTML =
    "<strong>Estimated Shipping:</strong> $" + estimatedShipping.toFixed(2);
  subtotalP.innerHTML = "<strong>Subtotal:</strong> $" + subtotal.toFixed(2);
  estimatedTaxP.innerHTML =
    "<strong>Estimated Tax:</strong> $" + estimatedTax.toFixed(2);
  orderTotalP.innerHTML =
    "<strong>Order Total:</strong> $" + orderTotal.toFixed(2);

  // Append the paragraph elements to the cart totals div
  cartTotals.appendChild(recordsSubtotalP);
  cartTotals.appendChild(estimatedShippingP);
  cartTotals.appendChild(subtotalP);
  cartTotals.appendChild(estimatedTaxP);
  cartTotals.appendChild(orderTotalP);
}

// Initialize variables to store the selected currency and original prices of each item
var selectedCurrency = "CAD";
var originalPrices = [];

// A function that will change the currency on the page
function changeCurrency() {
  // Retrieve the newly selected currency from the currency dropdown
  var newCurrency = document.getElementById("currency-dropdown").value;

  // Retrieve the currency flag element
  var currencyFlag = document.getElementById("currency-flag");

  // Update the flag image and alt text based on the selected currency
  if (newCurrency === "CAD") {
    currencyFlag.src = "images/canada.png";
    currencyFlag.alt = "Canadian flag icon";
    // Switch back to the original prices when changing to CAD
    changeToOriginalPrices();
  } else {
    currencyFlag.src = "images/united-states.png";
    currencyFlag.alt = "USA flag icon";
    // Convert the prices when changing to USD
    convertPrices();
  }

  // Update the selected currency variable
  selectedCurrency = newCurrency;

  // Update the prices displayed for each item in the cart
  displayCart();

  // Recalculate and display the cart totals with the new currency
  calculateCartTotals();
}

// Create a function that will convert the price of each item between currencies
function convertPrices() {
  // Set the exchange rate for conversion between CAD and USD
  var exchangeRate = 0.74;

  // If the originalPrices array is empty, populate it with the original prices of each item
  if (originalPrices.length === 0) {
    for (var i = 0; i < records.length; i++) {
      originalPrices[i] = records[i].price;
    }
  }

  // Convert the prices of each item based on the exchange rate
  for (var i = 0; i < records.length; i++) {
    records[i].price = originalPrices[i] * exchangeRate;
  }

  // Update the prices in the cart based on the converted prices of each item
  for (var i = 0; i < cart.length; i++) {
    var recordID = cart[i].id;
    for (var j = 0; j < records.length; j++) {
      if (records[j].id === recordID) {
        cart[i].price = records[j].price;
        break;
      }
    }
  }

  // Convert the prices of each item in the records array and redisplay them
  displayRecords();

  // Convert the prices of each item in the cart array and redisplay them
  displayCart();

  // Recalculate and redisplay the cart totals based on the converted prices
  calculateCartTotals();
}

// A function to change prices back to the original currency
function changeToOriginalPrices() {
  // Restore the prices of each item to their original values
  for (var i = 0; i < records.length; i++) {
    records[i].price = originalPrices[i];
  }

  // Update the prices in the cart based on the restored prices of each item
  for (var i = 0; i < cart.length; i++) {
    var recordID = cart[i].id;
    for (var j = 0; j < records.length; j++) {
      if (records[j].id === recordID) {
        cart[i].price = records[j].price;
        break;
      }
    }
  }

  // Change the prices of each item in the records array back to the original values and redisplay them
  displayRecords();

  // Change the prices of each item in the cart array back to the original values and redisplay them
  displayCart();

  // Recalculate and redisplay the cart totals back to the original prices
  calculateCartTotals();
}

// A function that will add items to the cart array
function addToCart() {
  // Retrieve the value of the record ID entered by the user
  var recordID = document.getElementById("record-id-tb").value;

  // Retrieve the value of the quantity entered by the user
  var quantity = Number(document.getElementById("quantity-tb").value);

  // Store a boolean value in a variable to check if the item is already in the cart
  var recordAlreadyInCart = false;

  // Loop through the cart array
  for (var i = 0; i < cart.length; i++) {
    // Check if the currently indexed cart item matches the entered ID
    if (recordID === cart[i].id) {
      // Set it to true if the item is already in the cart
      recordAlreadyInCart = true;

      // Calculate the accumulated quantity in the cart after adding the new quantity added by the user
      var accumulatedQuantity = cart[i].quantityInCart + quantity;

      // Loop through the records array to find the corresponding ID
      for (var j = 0; j < records.length; j++) {
        // Check if the currently indexed item mataches the entered ID
        if (records[j].id === recordID) {
          // Retrieve the maximum allowed quantity for the item
          var maxAllowed = records[j].maximumPerCustomer;

          // Check if adding the quantity will exceed the maximum allowed
          if (accumulatedQuantity <= maxAllowed) {
            // Update the quantity in the cart
            cart[i].quantityInCart = accumulatedQuantity;

            // Update the quantity in stock for the correspdonding item
            records[j].quantityInStock -= quantity;
          }
          break;
        }
      }
      break;
    }
  }

  // For scenarios where the item is not already in the cart
  if (!recordAlreadyInCart) {
    // Loop through the records array to find the corresponding ID
    for (var k = 0; k < records.length; k++) {
      // Check if the currently indexed item matches the entered ID and the quantity is greater than 0
      if (recordID === records[k].id && quantity > 0) {
        // Calculate the new quantity to be added, factoring in the maximum allowed per customer
        var newQuantity = Math.min(quantity, records[k].maximumPerCustomer);

        // Update the quantity in stock for the corresponding item
        records[k].quantityInStock -= newQuantity;

        // Create a new instance of the Cart object with the item's specified details
        cart.push(
          new Cart(
            records[k].id,
            records[k].price,
            newQuantity,
            records[k].shippingCost
          )
        );
        break;
      }
    }
  }

  // Call the add to cart's validation function
  validateAddRecord();

  // Update the information displayed in the catalogue
  displayRecords();

  // Update the information displayed in the cart
  displayCart();

  // Recalculate the cart totals
  calculateCartTotals();
}

// A function that will remove items from the cart array
function removeFromCart() {
  // Retrieve the value of the record ID entered by the user
  var recordID = document.getElementById("record-id-tb").value;

  // Retrieve the value of the quantity to remove entered by the user
  var quantityToRemove = Number(document.getElementById("quantity-tb").value);

  // Loop through the cart array
  for (var i = 0; i < cart.length; i++) {
    // Check if the currently indexed cart item mataches the entered ID
    if (recordID === cart[i].id) {
      // Ensure quantity to remove is not greater than the quantity in cart
      quantityToRemove = Math.min(quantityToRemove, cart[i].quantityInCart);

      // Update the quantity in the cart
      cart[i].quantityInCart -= quantityToRemove;

      // Loop through the records array to find the corresponding ID
      for (var j = 0; j < records.length; j++) {
        // Check if the currently indexed item mataches the entered ID
        if (recordID === records[j].id) {
          // Update the quantity in stock for the corresponding item
          records[j].quantityInStock += quantityToRemove;
          break;
        }
      }

      // If the updated quantity in the cart is less than or equal to 0, remove it from the cart
      if (cart[i].quantityInCart <= 0) {
        var cartItemIndex = i;
        removeTableRow(cartItemIndex);
        cart.splice(cartItemIndex, 1);
      }
      break;
    }
  }

  // Call the remove from cart's validation function
  validateRemoveRecord();

  // Update the information displayed in the catalogue
  displayRecords();

  // Update the information displayed in the cart
  displayCart();

  // Recalculate the cart totals
  calculateCartTotals();
}

// A helper function to remove a table row at the specified index
function removeTableRow(index) {
  // Store the cart table element in a variable
  var cartTable = document.getElementById("cart-table");

  // Check if the cart table and index are valid
  if (cartTable && index >= 0 && index < cart.length) {
    // If so, delete the row at the specified index (add 1 to skip the row header)
    cartTable.deleteRow(index + 1);
  }
}

// A function to submit a review for an item
function reviewRecords() {
  // Retrieve the record ID entered in the review input element and store it in a variable
  var recordIDInput = document.getElementById("review-record-id-tb");

  // Retrieve the review entered in the textarea element and store it in a variable
  var reviewTextarea = document.getElementById("review-textarea");

  // Store all radio buttons with the name 'rating' in a variable
  var ratingRadioButtons = document.getElementsByName("rating");

  // Store the value of the review input element in a variable
  var recordID = recordIDInput.value;

  // Store the value of the revie textarea element in a variable
  var review = reviewTextarea.value;

  // Initialize a variable to store the user's rating
  var rating = "";

  // Loop through the radio buttons
  for (var i = 0; i < ratingRadioButtons.length; i++) {
    // Check if one of the radio buttons are checked
    if (ratingRadioButtons[i].checked) {
      // Assign the rating variable to the value of the checked radio button
      rating = ratingRadioButtons[i].value;
      // Clear the checked state of the radio button
      ratingRadioButtons[i].checked = false;
      break;
    }
  }

  // Retrieve the warning element for the ID input
  var reviewRecordIdWarning = document.getElementById(
    "review-record-id-tb-warning"
  );

  // Check if both review and rating are provided
  if (review !== "" && rating !== "") {
    // Create a new instance of the Review object and store the values of each input
    var newReview = new Review(review, rating);

    // Store a boolean value in a variable to check if the provided ID is valid
    var recordFound = false;

    // Loop through the records array to find the corresponding ID
    for (var i = 0; i < records.length; i++) {
      if (recordID === records[i].id) {
        // Set the recordFound variable to true
        recordFound = true;

        // Add the new review to the record's reviews array
        records[i].reviews.push(newReview);

        // Clear the review textarea element's value
        reviewTextarea.value = "";

        // Loop through the radio buttons
        for (var j = 0; j < ratingRadioButtons.length; j++) {
          // Uncheck the selected radio button
          ratingRadioButtons[j].checked = false;
        }

        // Display a thank you message to confirm the user successfully submitted their review
        reviewRecordIdWarning.style.color = "var(--green)";
        reviewRecordIdWarning.innerHTML = "Thank you for your review!";
        break;
      }
    }

    // If the record is not found, display an error message
    if (!recordFound) {
      reviewRecordIdWarning.style.color = "var(--red)";
      reviewRecordIdWarning.innerHTML =
        "Record ID cannot be found in our catalogue.";
    }
  } else {
    // Call the review validation function
    validateReviewRecord();
  }
}

// A function to validate adding a record to the cart
function validateAddRecord() {
  // Store the ID added to the cart in a variable
  var addRecordID = document.getElementById("record-id-tb").value;

  // Store the ID warning div element in a variable and clear its inner HTML
  var addRecordIdWarning = document.getElementById("record-id-tb-warning");
  addRecordIdWarning.innerHTML = "";

  // Store the quantity added to the cart in a variable
  var quantity = Number(document.getElementById("quantity-tb").value);

  // Store the quantity warning div element in a variable and clear its inner HTML
  var addQuantityWarning = document.getElementById("quantity-tb-warning");
  addQuantityWarning.innerHTML = "";

  // Check if the record ID input is empty
  if (addRecordID === "") {
    addRecordIdWarning.innerHTML = "Please enter a record ID.";
  } else {
    // Initialize a variable as a boolean value that checks if the record has been found
    var recordFound = false;

    // Loop through records array to find the corresponding ID
    for (var i = 0; i < records.length; i++) {
      if (addRecordID === records[i].id) {
        // Set the recordFound variable to true
        recordFound = true;

        // Check if the quantity input is less than 1
        if (quantity < 1) {
          addQuantityWarning.innerHTML = "Quantity must be greater than 0.";
          return;
        }

        // Check if the quantity input exceeds available stock
        if (quantity > records[i].quantityInStock) {
          addQuantityWarning.innerHTML =
            "There is not enough quantity in stock (the maximum amount has been added to your cart).";
          return;
        }

        // Check if the quantity input exceeds maximum allowed per customer
        if (quantity > records[i].maximumPerCustomer) {
          addQuantityWarning.innerHTML =
            "You can only add " +
            records[i].maximumPerCustomer +
            " copies of this record to your cart (the maximum amount has been added to your cart).";
          return;
        }
      }
    }

    // If the record is not found, display an error message
    if (!recordFound) {
      addRecordIdWarning.innerHTML =
        "Record ID cannot be found in our catalogue";
    }
  }
}

// A function to validate removing a record from the cart
function validateRemoveRecord() {
  // Store the value of the ID removed from the cart in a variable
  var removeRecordID = document.getElementById("record-id-tb").value;

  // Store the ID warning div element in a variable and clear its inner HTML
  var removeRecordIdWarning = document.getElementById("record-id-tb-warning");
  removeRecordIdWarning.innerHTML = "";

  // Store the value of the quantity removed from the cart in a variable
  var quantity = Number(document.getElementById("quantity-tb").value);

  // Store the quantity warning div element in a variable and clear its inner HTML
  var removeQuantityWarning = document.getElementById("quantity-tb-warning");
  removeQuantityWarning.innerHTML = "";

  // Check if the record ID input is empty
  if (removeRecordID === "") {
    removeRecordIdWarning.innerHTML = "Please enter a record ID.";
  } else {
    // Initialize a variable as a boolean value that checks if all records have been removed
    var allRecordsRemoved = true;

    // Loop through the cart array
    for (var i = 0; i < cart.length; i++) {
      if (removeRecordID === cart[i].id) {
        // Check if the quantity input is less than 1
        if (quantity < 1) {
          removeQuantityWarning.innerHTML = "Quantity must be greater than 0.";
          return;
        }
        // Check if there is any quantity in the cart
        if (cart[i].quantityInCart > 0) {
          // Set the allRecordsRemoved variable to false
          allRecordsRemoved = false;
        }
      }
    }

    // If all records are removed or the ID cannot be found, display an error message
    if (allRecordsRemoved) {
      removeRecordIdWarning.innerHTML =
        "Record ID cannot be found or has been removed from your cart.";
    }
  }
}

// A function to validate reviewing a record
function validateReviewRecord() {
  // Store the value of the ID to review in a variable
  var reviewRecordID = document.getElementById("review-record-id-tb").value;

  // Store the review record ID warning div element in a variable and clear its inner HTML
  var reviewRecordIdWarning = document.getElementById(
    "review-record-id-tb-warning"
  );
  reviewRecordIdWarning.innerHTML = "";

  // Check if the record ID input is empty
  if (reviewRecordID === "") {
    reviewRecordIdWarning.style.color = "var(--red)";
    reviewRecordIdWarning.innerHTML = "Please enter a record ID.";
  } else {
    // Initialize a variable as a boolean value that checks if the record has been found
    var recordFound = false;

    // Loop through the records array to find the corresponding ID
    for (var i = 0; i < records.length; i++) {
      if (reviewRecordID === records[i].id) {
        // Set the recordFound variable to true
        recordFound = true;
        break;
      }
    }

    // If the record is not found, display an error message
    if (!recordFound) {
      reviewRecordIdWarning.style.color = "var(--red)";
      reviewRecordIdWarning.innerHTML =
        "Record ID cannot be found in our catalogue.";
    }
  }
}

// A function to display the details of a record
function displayRecordDetails() {
  // Retrieve the value of the record ID entered by the user
  var displayRecordID = document.getElementById("record-id-tb").value;

  // Retrieve the warning element div for the record ID input and clear its inner HTML
  var displayRecordIdWarning = document.getElementById("record-id-tb-warning");
  displayRecordIdWarning.innerHTML = "";

  // Check if the record ID input is empty
  if (displayRecordID === "") {
    reviewRecordIdWarning.innerHTML = "Please enter a record ID.";
  } else {
    // Initialize a variable as a boolean value to check if the record has been found
    var recordFound = false;

    // Loop through the records array to find the corresponding ID
    for (var i = 0; i < records.length; i++) {
      // Store the currently indexed item in a variable
      var record = records[i];
      if (displayRecordID === record.id) {
        // If the record ID is found, set the recordFound variable to true
        recordFound = true;

        // Create a string to display the record details
        var detailsString =
          "Record Details:\n\n" +
          "ID: " +
          record.id +
          "\n" +
          "Name: " +
          record.name +
          "\n" +
          "Price: $" +
          record.price.toFixed(2) +
          "\n" +
          "Quantity in stock: " +
          record.quantityInStock +
          "\n" +
          "Maximum per customer: " +
          record.maximumPerCustomer +
          "\n" +
          "Genre: " +
          record.category +
          "\n" +
          "Shipping cost: $" +
          record.shippingCost.toFixed(2) +
          "\n\n" +
          "Description: " +
          record.description +
          "\n";

        // Check if there are any reviews for the record
        if (record.reviews && record.reviews.length > 0) {
          // If so, add a section within the details string for reviews
          detailsString += "\nReviews:\n";
          // Loop through the reviews array nested within the records array
          for (var j = 0; j < record.reviews.length; j++) {
            // Add the information of the currently indexed review to the details string
            detailsString +=
              "- Review #" + (j + 1) + ": " + record.reviews[j].review + "\n";
          }

          // Initialize a variable to store the total of all ratings
          var totalRating = 0;
          // Loop through the reviews array nested within the records array
          for (var i = 0; i < record.reviews.length; i++) {
            // Accumulate the total of all record ratings
            totalRating += Number(record.reviews[i].rating);
          }
          // Calculate the average rating by taking the total of all ratings and dividing it by the total number of ratings
          var averageRating = totalRating / record.reviews.length;

          // Add the average rating information to the details string
          detailsString += "\nAverage Rating: " + averageRating.toFixed(1);
        } else {
          // If not ratings are found, add this information to the details string instead
          detailsString += "\nNo reviews available.";
        }

        // Display the details in an alert when the user clicks on the 'Record Details' button
        alert(detailsString);
        break;
      }
    }

    // If the record is not found, display an error message
    if (!recordFound) {
      reviewRecordIdWarning.innerHTML =
        "Record ID cannot be found in our catalogue.";
    }
  }
}

// Call the initialize function when the page loads
window.onload = initialize();
