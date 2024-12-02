// Danh sách các hình ảnh
const diceImages = [
  "images/bau.png",  // Bầu
  "images/cua.png",  // Cua
  "images/tom.png",  // Tôm
  "images/ca.png",   // Cá
  "images/ga.png",   // Gà
  "images/nai.png"   // Nai
];

// Phát âm thanh quay xúc xắc
const rollSound = document.getElementById("roll-sound");

// Hàm chơi game
function playGame() {
  // Phát âm thanh
  rollSound.currentTime = 0; // Đặt lại thời gian âm thanh về 0
  rollSound.play();

  // Lấy kết quả ngẫu nhiên
  const random1 = Math.floor(Math.random() * diceImages.length);
  const random2 = Math.floor(Math.random() * diceImages.length);
  const random3 = Math.floor(Math.random() * diceImages.length);

  // Hiển thị hình ảnh
  document.getElementById("dice1").src = diceImages[random1];
  document.getElementById("dice2").src = diceImages[random2];
  document.getElementById("dice3").src = diceImages[random3];

  // Hiển thị thông báo kết quả
  const resultMessage = document.getElementById("result-message");
  const names = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
  const resultText = `${names[random1]}, ${names[random2]}, ${names[random3]}`;
  resultMessage.textContent = `🎉 Kết quả: ${resultText}!`;

  // Thêm vào lịch sử
  const history = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = `🎲 ${resultText}`;
  history.appendChild(listItem);
}

// Hàm khởi động lại
function restartGame() {
  // Đặt lại hình ảnh mặc định
  document.getElementById("dice1").src = "images/default.png";
  document.getElementById("dice2").src = "images/default.png";
  document.getElementById("dice3").src = "images/default.png";

  // Xóa thông báo và lịch sử
  document.getElementById("result-message").textContent = "";
  document.getElementById("history").innerHTML = "";
}
