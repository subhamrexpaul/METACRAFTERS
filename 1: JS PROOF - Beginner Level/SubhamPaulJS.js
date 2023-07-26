let indianFoodNFTs = [];

function createFoodNFT(name, cuisine, spicyLevel, vegNonveg) {
  let nft = {
    name: name,
    cuisine: cuisine,
    spicyLevel: spicyLevel,
    vegNonveg: vegNonveg
  };

  indianFoodNFTs.push(nft);
}

function displayFoodNFTs() {
  for (let i = 0; i < indianFoodNFTs.length; i++) {
    console.log("Food NFT " + (i + 1) + " Details:");
    console.log("Name: " + indianFoodNFTs[i].name);
    console.log("Cuisine: " + indianFoodNFTs[i].cuisine);
    console.log("Spicy Level: " + indianFoodNFTs[i].spicyLevel);
    console.log("Veg/Nonveg: " + indianFoodNFTs[i].vegNonveg);
    console.log("--------------------");
  }
}

function getTotalFoodNFTs() {
  console.log("Total Indian Food NFTs Minted: " + indianFoodNFTs.length);
}

// Create some Indian Food NFTs
createFoodNFT("Biryani", "Hyderabadi", "High", "Nonveg");
createFoodNFT("Butter Chicken", "Punjabi", "Medium", "Nonveg");
createFoodNFT("Masala Dosa", "South Indian", "Medium", "Veg");

// Display Indian Food NFTs details
displayFoodNFTs();

// Get total minted Indian Food NFTs
getTotalFoodNFTs();